export type OddsFormat = "american" | "decimal" | "fractional";

export type ParlayLeg = {
  id: string;
  odds: string;
  label?: string;
};

export type ParlayResult = {
  decimalOdds: number;
  americanOdds: number;
  fractionalOdds: string;
  payout: number;
  profit: number;
  impliedProbability: number;
  legCount: number;
  valid: boolean;
  error?: string;
};

/** Convert American odds to decimal (includes stake). */
export function americanToDecimal(american: number): number {
  if (american === 0 || Number.isNaN(american)) return NaN;
  if (american > 0) return american / 100 + 1;
  return 100 / Math.abs(american) + 1;
}

/** Convert decimal odds to American. */
export function decimalToAmerican(decimal: number): number {
  if (!(decimal > 1)) return NaN;
  if (decimal >= 2) return Math.round((decimal - 1) * 100);
  return Math.round(-100 / (decimal - 1));
}

/** Parse fractional odds like "5/2", "11/10", "6/1". */
export function fractionalToDecimal(raw: string): number {
  const cleaned = raw.trim().replace(/\s+/g, "");
  const match = cleaned.match(/^(-?\d+(?:\.\d+)?)\/(-?\d+(?:\.\d+)?)$/);
  if (!match) return NaN;
  const num = Number(match[1]);
  const den = Number(match[2]);
  if (!(den > 0) || Number.isNaN(num)) return NaN;
  return num / den + 1;
}

export function decimalToFractional(decimal: number): string {
  if (!(decimal > 1)) return "—";
  const profit = decimal - 1;
  // Approximate as a readable fraction over 100
  const approx = Math.round(profit * 100);
  const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
  const g = gcd(Math.abs(approx), 100) || 1;
  return `${approx / g}/${100 / g}`;
}

/** Parse a single leg string into decimal odds for the active format. */
export function parseLegToDecimal(raw: string, format: OddsFormat): number {
  const value = raw.trim().replace(/,/g, "");
  if (!value) return NaN;

  if (format === "american") {
    const normalized = value.replace(/^\+/, "");
    const n = Number(normalized);
    if (!Number.isFinite(n) || n === 0) return NaN;
    return americanToDecimal(n);
  }

  if (format === "decimal") {
    const n = Number(value);
    if (!Number.isFinite(n) || n <= 1) return NaN;
    return n;
  }

  return fractionalToDecimal(value);
}

export function formatAmerican(american: number): string {
  if (!Number.isFinite(american)) return "—";
  return american > 0 ? `+${american}` : `${american}`;
}

export function formatMoney(amount: number, currency = "USD"): string {
  if (!Number.isFinite(amount)) return "—";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
    maximumFractionDigits: 2,
  }).format(amount);
}

export function formatDecimal(n: number, digits = 3): string {
  if (!Number.isFinite(n)) return "—";
  return n.toFixed(digits);
}

export function calculateParlay(
  legs: ParlayLeg[],
  stake: number,
  format: OddsFormat
): ParlayResult {
  const decimals: number[] = [];

  for (const leg of legs) {
    const d = parseLegToDecimal(leg.odds, format);
    if (!Number.isFinite(d) || d <= 1) {
      return {
        decimalOdds: NaN,
        americanOdds: NaN,
        fractionalOdds: "—",
        payout: NaN,
        profit: NaN,
        impliedProbability: NaN,
        legCount: legs.length,
        valid: false,
        error: "Enter valid odds for every leg (American ±, decimal > 1, or fraction like 5/2).",
      };
    }
    decimals.push(d);
  }

  if (decimals.length < 2) {
    return {
      decimalOdds: NaN,
      americanOdds: NaN,
      fractionalOdds: "—",
      payout: NaN,
      profit: NaN,
      impliedProbability: NaN,
      legCount: decimals.length,
      valid: false,
      error: "A parlay needs at least two legs.",
    };
  }

  if (!(stake > 0)) {
    return {
      decimalOdds: NaN,
      americanOdds: NaN,
      fractionalOdds: "—",
      payout: NaN,
      profit: NaN,
      impliedProbability: NaN,
      legCount: decimals.length,
      valid: false,
      error: "Enter a stake greater than zero.",
    };
  }

  const decimalOdds = decimals.reduce((acc, d) => acc * d, 1);
  const americanOdds = decimalToAmerican(decimalOdds);
  const payout = stake * decimalOdds;
  const profit = payout - stake;
  const impliedProbability = (1 / decimalOdds) * 100;

  return {
    decimalOdds,
    americanOdds,
    fractionalOdds: decimalToFractional(decimalOdds),
    payout,
    profit,
    impliedProbability,
    legCount: decimals.length,
    valid: true,
  };
}

/** Combinations helper for round-robin parlays. */
export function combinations<T>(arr: T[], size: number): T[][] {
  if (size <= 0 || size > arr.length) return [];
  const result: T[][] = [];
  const walk = (start: number, path: T[]) => {
    if (path.length === size) {
      result.push([...path]);
      return;
    }
    for (let i = start; i < arr.length; i++) {
      path.push(arr[i]);
      walk(i + 1, path);
      path.pop();
    }
  };
  walk(0, []);
  return result;
}

export type RoundRobinBundle = {
  size: number;
  count: number;
  totalStake: number;
  totalPayoutIfAllHit: number;
  totalProfitIfAllHit: number;
};

export function calculateRoundRobin(
  legs: ParlayLeg[],
  stakePerParlay: number,
  format: OddsFormat,
  sizes: number[]
): { bundles: RoundRobinBundle[]; valid: boolean; error?: string } {
  const decimals = legs.map((leg) => parseLegToDecimal(leg.odds, format));
  if (decimals.some((d) => !Number.isFinite(d) || d <= 1)) {
    return { bundles: [], valid: false, error: "Enter valid odds for every selection." };
  }
  if (legs.length < 3) {
    return { bundles: [], valid: false, error: "Round robins need at least three selections." };
  }
  if (!(stakePerParlay > 0)) {
    return { bundles: [], valid: false, error: "Enter a stake per parlay greater than zero." };
  }

  const bundles: RoundRobinBundle[] = sizes
    .filter((size) => size >= 2 && size <= legs.length)
    .map((size) => {
      const combos = combinations(decimals, size);
      let totalPayout = 0;
      for (const combo of combos) {
        const odds = combo.reduce((a, b) => a * b, 1);
        totalPayout += stakePerParlay * odds;
      }
      const totalStake = stakePerParlay * combos.length;
      return {
        size,
        count: combos.length,
        totalStake,
        totalPayoutIfAllHit: totalPayout,
        totalProfitIfAllHit: totalPayout - totalStake,
      };
    });

  return { bundles, valid: true };
}

/** Sample fixed-odds Vegas-style payouts for -110 spread/total parlays. */
export const FIXED_ODDS_PAYOUT_TABLE: Array<{ teams: number; payoutToOne: string; decimalApprox: number }> = [
  { teams: 2, payoutToOne: "2.6 to 1", decimalApprox: 3.6 },
  { teams: 3, payoutToOne: "6 to 1", decimalApprox: 7 },
  { teams: 4, payoutToOne: "11 to 1", decimalApprox: 12 },
  { teams: 5, payoutToOne: "22 to 1", decimalApprox: 23 },
  { teams: 6, payoutToOne: "45 to 1", decimalApprox: 46 },
  { teams: 7, payoutToOne: "90 to 1", decimalApprox: 91 },
  { teams: 8, payoutToOne: "180 to 1", decimalApprox: 181 },
  { teams: 9, payoutToOne: "360 to 1", decimalApprox: 361 },
  { teams: 10, payoutToOne: "700 to 1", decimalApprox: 701 },
];

export function createLeg(odds = "-110"): ParlayLeg {
  return {
    id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
    odds,
  };
}
