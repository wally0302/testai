'use client'

import { Search, Loader2 } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

interface SearchComponentProps {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
  input: string
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => void
  isLoading: boolean
}

export function SearchComponent({ handleSubmit, input, handleInputChange, isLoading }: SearchComponentProps) {
  return (
    <form onSubmit={handleSubmit} className="max-w-4xl mx-auto pt-12">
      <div className="relative flex items-center">
        <Input
          type="text"
          value={input}
          onChange={handleInputChange}
          placeholder="Ask anything..."
          className="pr-24 h-14 text-lg rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-zinc-800 transition-colors"
          disabled={isLoading}
        />
        <Button
          type="submit"
          disabled={isLoading || !input.trim()}
          variant="orange"
          className="absolute right-2 rounded-lg"
        >
          {isLoading ? (
            <Loader2 className="h-5 w-5 animate-spin" />
          ) : (
            <Search className="h-5 w-5" />
          )}
        </Button>
      </div>
    </form>
  )
}