
import React from 'react'

import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'

import Card from '../components/card';
import { CardProps } from '@/types';

jest.mock('../components/card/Background', () => {
    return function MockBackground() {
        return <div data-testid="mock-background" />
    }
})

jest.mock('../components/card/Actions', () => {
    return function MockActions() {
        return <div data-testid="mock-actions" />
    }
})


jest.mock('framer-motion', () => ({
    AnimatePresence: ({ children }: { children: React.ReactNode }) => <>{children}</>,
    motion: {
        div: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
    },
}))

describe('Card Component', () => {
    const defaultProps: CardProps = {
        type: "test",
        backgroundMedia: { type: 'image', src: 'test-file-render.jpg' },
        title: 'Test title',
        Content: 'Test content',
        subtitle: 'Test subtitle',
        action: {
            type: 'button', data: {
                text: "Test action",
                action: "onclick",
                destination: "#"
            }
        },
    }

    it('renders card items', () => {
        render(<Card {...defaultProps} />)

        expect(screen.getByText('NEW')).toBeInTheDocument()
        expect(screen.getByText('Test title')).toBeInTheDocument()
        expect(screen.getByText('Test subtitle')).toBeInTheDocument()
        expect(screen.getByText('Test content')).toBeInTheDocument()
        expect(screen.getByTestId('mock-background')).toBeInTheDocument()
        expect(screen.getByTestId('mock-actions')).toBeInTheDocument()
    })

    it('renders card without subtitle', () => {
        const propsWithoutSubtitle = { ...defaultProps, subtitle: undefined }
        render(<Card {...propsWithoutSubtitle} />)

        expect(screen.getByText('Test title')).toBeInTheDocument()
        expect(screen.queryByText('Test subtitle')).not.toBeInTheDocument()
    })

    it('renders card without action', () => {
        const propsWithoutAction = { ...defaultProps, action: undefined }
        render(<Card {...propsWithoutAction} />)

        expect(screen.queryByTestId('mock-actions')).not.toBeInTheDocument()
    })

})

