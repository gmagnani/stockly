const Sidebar = () => {
  return (
    <div className="w-64 bg-zinc-50 ">
      <div className="px-8 py-6">
        <h1 className="text-2xl font-bold">Stockly</h1>
      </div>
      <div className="flex flex-col gap-2 p-2">
        <button className="px-6 py-2 rounded-md bg-zinc-100">Dashboard</button>
        <button className="px-6 py-2 rounded-md bg-zinc-100">Produtos</button>
        <button className="px-6 py-2 rounded-md bg-zinc-100">Pedidos</button>
      </div>
    </div>
  );
};

export default Sidebar;
