import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export type SortOption = 'relevance' | 'date-newest' | 'date-oldest' | 'salary-high' | 'salary-low';

interface SortMenuProps {
  currentSort: SortOption;
  onSortChange: (option: SortOption) => void;
}

const sortOptions: { value: SortOption; label: string }[] = [
  { value: 'relevance', label: 'Most Relevant' },
  { value: 'date-newest', label: 'Newest First' },
  { value: 'date-oldest', label: 'Oldest First' },
  { value: 'salary-high', label: 'Highest Salary' },
  { value: 'salary-low', label: 'Lowest Salary' },
];

export default function SortMenu({ currentSort, onSortChange }: SortMenuProps) {
  const currentLabel = sortOptions.find(option => option.value === currentSort)?.label || 'Sort by';

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          {currentLabel}
          <ChevronDown className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {sortOptions.map((option) => (
          <DropdownMenuItem
            key={option.value}
            onClick={() => onSortChange(option.value)}
            className={currentSort === option.value ? 'bg-accent' : ''}
          >
            {option.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
} 