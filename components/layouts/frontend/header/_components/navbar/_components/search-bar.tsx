"use client";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { Check, ChevronDown, Search } from "lucide-react";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

export const SearchBar = ({ categories }: CategoryDropdownModelProps) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("all");

  return (
    <div className="flex items-center w-[50%] bg-[#2a2a2a] border border-[#464646] rounded-md">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            className="min-w-10 justify-between text-xs border-none hover:bg-[#2a2a2a] hover:text-white bg-[#2a2a2a] border-[#464646] text-white"
          >
            {value
              ? categories.find((category) => category.value === value)?.label
              : "All"}
            <ChevronDown className="opacity-50" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="min-w-[100px] w-auto p-0">
          <Command>
            <CommandInput className="h-8 text-xs" placeholder="Category..." />
            <CommandList>
              <CommandEmpty>No category found.</CommandEmpty>
              <CommandGroup>
                {categories.map((category) => (
                  <CommandItem
                    className="text-xs"
                    key={category.value}
                    value={category.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue === value ? "" : currentValue);
                      setOpen(false);
                    }}
                  >
                    {category.label}
                    <Check
                      className={cn(
                        "ml-auto",
                        value === category.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </CommandItem>
                ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>

      {/* search */}
      {/* search */}
      <Input
        className="bg-[#2a2a2a] border-[#464646] text-xs placeholder:text-xs text-white border-none focus-visible:ring-transparent rounded-none"
        placeholder="Search Kmazon"
      />
      <Button
        variant="ghost"
        className="bg-[#2a2a2a] rounded text-white border-none hover:bg-[#464646] hover:text-white"
      >
        <Search className="size-5" />
      </Button>
    </div>
  );
};

export default SearchBar;
