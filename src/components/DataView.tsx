import * as React from "react";

type ViewField<T> = {
  label: string;
  value: (data: T) => React.ReactNode;
};

export default function DataView<T>({
  data,
  fields,
}: {
  data: T;
  fields: ViewField<T>[];
}) {
  return (
    <div className="w-full">
      <div className="bg-surface rounded-lg px-6 py-8">
        <dl className="grid grid-cols-1 gap-4">
          {fields.map((f, i) => (
            <div key={i}>
              <dt className="text-xs font-semibold uppercase tracking-wide text-primary">
                {f.label}
              </dt>
              <dd className="mt-1 text-sm text-text">{f.value(data)}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}