import React, { useState, useMemo, useCallback } from "react";

const DEFAULT_MAX_LENGTH = 150;

interface DescriptionProps {
  text: string;
  maxLength?: number;
}

export function Description({
  text,
  maxLength = DEFAULT_MAX_LENGTH,
}: DescriptionProps) {
  const [showFullText, setShowFullText] = useState(false);

  const truncatedText = useMemo(() => {
    if (!showFullText && text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }
    return text;
  }, [text, maxLength, showFullText]);

  const toggleText = useCallback(() => {
    setShowFullText(!showFullText);
  }, [showFullText]);

  return (
    <div>
      <p>{truncatedText}</p>
      {text.length > maxLength && (
        <button onClick={toggleText}>
          {showFullText ? "Hide Details" : "Show Details"}
        </button>
      )}
    </div>
  );
}
