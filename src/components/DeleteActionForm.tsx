"use client";

import React from "react";

type HiddenValues = Record<string, string | number>;

export default function DeleteActionForm({
  action,
  values,
  confirmText = "Sei sicuro di voler eliminare questo elemento?",
  title = "Elimina",
  buttonClassName,
  children,
}: {
  action: (formData: FormData) => void | Promise<void>;
  values: HiddenValues;
  confirmText?: string;
  title?: string;
  buttonClassName?: string;
  children: React.ReactNode;
}) {
  return (
    <form
      action={action}
      onSubmit={(e) => {
        if (!confirm(confirmText)) e.preventDefault();
      }}
    >
      {Object.entries(values).map(([name, value]) => (
        <input key={name} type="hidden" name={name} value={String(value)} />
      ))}

      <button type="submit" title={title} className={["cursor-pointer", buttonClassName].join(" ")}>
        {children}
      </button>
    </form>
  );
}