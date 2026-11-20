"use client";
import Script from "next/script";
import { useState } from "react";
export default function ChatLauncher() {
  const [loaded, setLoaded] = useState(false);
  const [failed, setFailed] = useState(false);
  return (
    <div className="chat-launcher">
      {!loaded ? (
        <button
          onClick={() => setLoaded(true)}
          aria-label="Load portfolio chat"
        >
          Chat <span aria-hidden="true">✳</span>
        </button>
      ) : (
        <>
          <Script
            src="https://fetchply.com/widget.js?v=0.1.0"
            data-chatbot-id="bd7b1d20-de51-4024-94ab-043958322c07"
            strategy="afterInteractive"
            onError={() => setFailed(true)}
          />
          <a href="mailto:musmandev370@gmail.com">
            {failed ? "Chat unavailable · Email me" : "Prefer email?"}
          </a>
        </>
      )}
    </div>
  );
}
