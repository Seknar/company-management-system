import * as React from "react";

type FieldType = "text" | "number" | "select" | "textarea";

export type FormField = {
  name: string;
  label: string;
  type?: FieldType;
  required?: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];   // select only
  rows?: number;   // textarea only
};

type Props = {
  fields: FormField[];

  errors?: Record<string, string>;   // Field-level errors (e.g. from server validation)
  formError?: string;   // Top error (e.g. "Unable to save")

  submitLabel?: string;

  footer?: React.ReactNode;   // Extra buttons/links near submit (e.g. Cancel)

  action?: ((formData: FormData) => void | Promise<void>) | string;

  method?: "post" | "get";
};

export default function DataForm({
  fields,
  errors,
  formError,
  submitLabel = "Crea",
  footer,
  action,
  method = "post",
}: Props) {
  return (
    <div className="w-full">
      <form action={action as any} method={typeof action === "string" ? method : undefined}>
        <div className="rounded-lg bg-surface px-6 py-8">
          {formError ? (
            <div className="mb-4 rounded-md border border-red-200 bg-red-50 p-3 text-sm text-red-700">
              {formError}
            </div>
          ) : null}

          <div className="grid grid-cols-1 gap-4">
            {fields.map((f) => {
              const type = f.type ?? "text";
              const fieldError = errors?.[f.name];

              return (
                <div key={f.name}>
                  <label htmlFor={f.name} className="block text-sm font-medium text-text">
                    {f.label} {f.required ? <span className="text-red-600">*</span> : null}
                  </label>

                  <div className="mt-1">
                    {type === "select" ? (
                      <select
                        id={f.name}
                        name={f.name}
                        required={f.required}
                        className={[
                          "block w-full rounded-md border bg-accent px-3 py-2 text-sm outline-none",
                          "border-accent focus:ring-2 focus:ring-accent",
                          fieldError && "border-red-400 focus:border-red-500 focus:ring-red-100",
                        ].join(" ")}
                      >
                        <option value="" disabled>
                          {f.placeholder ?? "Seleziona..."}
                        </option>
                        {(f.options ?? []).map((opt) => (
                          <option key={opt.value} value={opt.value}>
                            {opt.label}
                          </option>
                        ))}
                      </select>
                    ) : type === "textarea" ? (
                      <textarea
                        id={f.name}
                        name={f.name}
                        required={f.required}
                        rows={f.rows ?? 4}
                        placeholder={f.placeholder}
                        className={[
                          "block w-full rounded-md border bg-accent px-3 py-2 text-sm text-text outline-none",
                          "border-accent focus:ring-2 focus:ring-accent",
                          fieldError && "border-red-400 focus:border-red-500 focus:ring-red-100",
                        ].join(" ")}
                      />
                    ) : (
                      <input
                        id={f.name}
                        name={f.name}
                        type={type}
                        required={f.required}
                        placeholder={f.placeholder}
                        className={[
                          "block w-full rounded-md border px-3 py-2 text-sm text-text outline-none",
                          "border-accent focus:ring-2 focus:ring-accent",
                          fieldError && "border-red-400 focus:border-red-500 focus:ring-red-100",
                        ].join(" ")}
                      />
                    )}
                  </div>

                  {fieldError ? <p className="mt-1 text-xs text-red-600">{fieldError}</p> : null}
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-end gap-3">
            {footer}
            <button
              type="submit"
              className="mt-6 inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-gray-50 hover:brightness-115 cursor-pointer"
            >
              {submitLabel}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}