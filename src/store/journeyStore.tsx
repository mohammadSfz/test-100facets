
import { CardProps } from '@/types';
import { create } from 'zustand';

export interface IJourneyState {
    list: CardProps[],
    currentStep: number,
    nextCard: () => void,
    prevCard: () => void,
    setList:( data:CardProps[])=>void
}


export const journeyStore = create<IJourneyState>((set) => ({
    list: [],
    currentStep: 0,
    setList: (data)=> set({list:data}),
    nextCard: () => set(({ currentStep, list }) => ({ currentStep: currentStep == list?.length - 1 ? 0 : currentStep +1 })),
    prevCard: () => set(({ currentStep, list }) => ({ currentStep: currentStep == 0 ? list?.length - 1 : currentStep - 1 }))
}))