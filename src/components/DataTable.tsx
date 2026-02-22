import * as React from "react";

export type Column<T> = {
    header: React.ReactNode;
    cell: (row: T) => React.ReactNode;
    className?: string;
};

type Props<T> = {
    columns: Column<T>[];
    data: T[];
    rowKey: (row: T) => string | number;
    emptyText?: React.ReactNode;
};

export default function DataTable<T>({
    columns,
    data,
    rowKey,
    emptyText = "Nessun risultato trovato.",
}: Props<T>) {
    return (
      <div className="w-full">
        <div className="overflow-x-auto rounded-lg border">
          <table className="min-w-full divide-y">
            <thead className="bg-accent">
              <tr>
                {columns.map((col, idx) => (
                  <th
                    key={idx}
                    scope="col"
                    className={[
                      "px-4 py-3 text-xs font-semibold uppercase tracking-wide text-text-inverse text-center",
                      col.className ?? "",
                    ].join(" ")}
                  >
                    {col.header}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y bg-surface">
              {data.length === 0 ? (
                <tr>
                  <td
                    colSpan={columns.length}
                    className="px-4 py-6 text-sm text-text"
                  >
                    {emptyText}
                  </td>
                </tr>
              ) : (
                data.map((row) => (
                  <tr key={rowKey(row)} className="hover:bg-background">
                    {columns.map((col, idx) => (
                      <td
                        key={idx}
                        className={[
                          "px-4 py-3 text-sm text-text text-center",
                          col.className ?? "",
                        ].join(" ")}
                      >
                        {col.cell(row)}
                      </td>
                    ))}
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    );
}