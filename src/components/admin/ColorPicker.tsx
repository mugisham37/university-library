"use client";

import { HexColorInput, HexColorPicker } from "react-colorful";
import { useState, useRef, useEffect } from "react";

interface ColorPickerProps {
  value?: string;
  onPickerChange: (color: string) => void;
}

const ColorPicker = ({ value = "#1c1f40", onPickerChange }: ColorPickerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const pickerRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Handle click outside to close picker
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleColorChange = (color: string) => {
    // Ensure color is in proper hex format
    const hexColor = color.startsWith("#") ? color : `#${color}`;
    onPickerChange(hexColor);
  };

  const handleInputChange = (color: string) => {
    // Remove # if present, HexColorInput handles it
    const cleanColor = color.replace("#", "");
    handleColorChange(`#${cleanColor}`);
  };

  const togglePicker = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative" ref={containerRef}>
      <div 
        className="color-picker cursor-pointer"
        onClick={togglePicker}
      >
        <div
          className="size-6 rounded border border-gray-300 flex-shrink-0"
          style={{ backgroundColor: value }}
          aria-label="Color preview"
        />
        <div className="flex flex-row items-center flex-1">
          <span className="text-dark-400">#</span>
          <HexColorInput
            color={value}
            onChange={handleInputChange}
            className="hex-input"
            placeholder="1c1f40"
          />
        </div>
      </div>
      
      {isOpen && (
        <div className="hex-color-picker" ref={pickerRef}>
          <HexColorPicker 
            color={value} 
            onChange={handleColorChange}
          />
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
