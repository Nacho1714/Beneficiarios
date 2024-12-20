export interface CreditsTagProps {
    contributorName: ContributorName;
    contributionDetail?: string;
}

// contributors.ts
export const CONTRIBUTORS = {
    BARROS_IGNACIO: "Barros Ignacio",
} as const;

// Tipo que se deriva de los valores de CONTRIBUTORS
export type ContributorName = (typeof CONTRIBUTORS)[keyof typeof CONTRIBUTORS];
