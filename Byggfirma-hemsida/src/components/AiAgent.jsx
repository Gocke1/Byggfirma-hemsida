import { useState } from "react";

export default function AiAgent() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hej! Jag är Mikaela – behöver du hjälp?" },
  ]);
  const [input, setInput] = useState("");

  const faqs = {
    "gips": "Vi levererar noggrann gipsentreprenad med hög kvalitet.",
    "stambyte": "Ja, vi utför stambyten med tydlig planering och återställning.",
    "totalentreprenad": "Vi tar helhetsansvar från idé till slutbesiktning.",
    "kontakt": "Vill du att jag öppnar kontaktformuläret?"
  };

  const answer = (q) => {
    const lower = q.toLowerCase();
    for (const k of Object.keys(faqs)) if (lower.includes(k)) return faqs[k];
    return "Jag är inte helt säker – skriv ‘kontakt’ om du vill nå oss snabbt!";
  };

  const send = () => {
    if (!input.trim()) return;
    const user = input.trim();
    setMessages((m) => [...m, { from: "user", text: user }, { from: "bot", text: answer(user) }]);
    setInput("");
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="flex items-center bg-primary text-white rounded-full p-3 shadow-card hover:opacity-90"
          aria-label="Öppna chatt"
        >
          <img
            src="https://i.imgur.com/OYVpe2W.png"
            alt="Mikaela"
            className="w-10 h-10 rounded-full mr-2"
          />
          Mikaela
        </button>
      )}
      {open && (
        <div className="bg-white w-72 rounded-xl shadow-card p-4 border border-neutralLine">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <img src="https://i.imgur.com/OYVpe2W.png" alt="" className="w-8 h-8 rounded-full"/>
              <span className="font-semibold text-neutralDark">Mikaela</span>
            </div>
            <button onClick={() => setOpen(false)} className="text-neutralText hover:text-neutralDark">✕</button>
          </div>
          <div className="border border-neutralLine rounded p-2 h-40 overflow-y-auto space-y-2">
            {messages.map((m, i) => (
              <div key={i} className={m.from === "bot" ? "text-left" : "text-right"}>
                <span className={`inline-block px-3 py-1 rounded ${m.from==="bot"?"bg-neutralBg text-neutralDark":"bg-primary text-white"}`}>
                  {m.text}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-2 flex gap-2">
            <input
              className="flex-1 border border-neutralLine rounded px-2 py-1"
              placeholder="Skriv din fråga…"
              value={input}
              onChange={(e)=>setInput(e.target.value)}
              onKeyDown={(e)=>e.key==="Enter" && send()}
            />
            <button onClick={send} className="bg-cta text-white px-3 rounded hover:opacity-90">Skicka</button>
          </div>
        </div>
      )}
    </div>
  );
}
