export interface Votes {
        good: number,
        neutral: number,
        bad: number,
    
}

export type VoteType = 'good' | 'neutral' | 'bad';

export interface VoteOptionsProps {
    onVote: (type:VoteType) => void,
    onReset: () => void,
    canReset: boolean
}

export interface VoteStatsProps {
    votes: Votes;
    totalVotes: number;
    positiveRate: number;
}