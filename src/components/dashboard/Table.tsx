const Table = ({
  columns,

  data,
}: {
  columns: { header: string; accessor: string; className?: string }[];

  data: any[];
}) => {
  return (
    <table className="mt-4 w-full">
      <thead>
        <tr className="text-left text-sm text-gray-500">
          {columns.map((col) => (
            <th key={col.accessor} className={col.className}>
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
    </table>
  );
};

export default Table;
