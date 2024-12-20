"use client";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Check, ChevronDown } from "lucide-react";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useState } from "react";
import { cn } from "@/lib/utils";

const DropdownLang = ({ langauges }: LangaugeModelProps) => {
  const [openLang, setOpenLang] = useState(false);
  const [valueLang, setValueLang] = useState("EN");
  return (
    <Popover open={openLang} onOpenChange={setOpenLang}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="min-w-10 py-4 px-2 rounded-sm justify-between text-[11px] border-none hover:bg-[#2a2a2a] hover:text-white bg-primary text-white"
        >
          {valueLang
            ? langauges.find((langauge) => langauge.value === valueLang)?.icon
            : ""}

          {valueLang
            ? langauges.find((langauge) => langauge.value === valueLang)?.value
            : "EN"}
          <ChevronDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="min-w-[100px] w-auto p-0">
        <Command>
          <CommandList>
            <CommandGroup>
              {langauges.map((langauge) => (
                <CommandItem
                  className="text-[11px]"
                  key={langauge.value}
                  value={langauge.value}
                  onSelect={(currentValue) => {
                    setValueLang(
                      currentValue === valueLang ? "" : currentValue
                    );
                    setOpenLang(false);
                  }}
                >
                  {langauge.icon}
                  {langauge.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      valueLang === langauge.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
};
export default DropdownLang;
