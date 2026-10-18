import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Bell,
  Check,
  CheckCircle2,
  ChevronDown,
  CircleUserRound,
  Clock3,
  FileText,
  Gauge,
  Headphones,
  LayoutDashboard,
  LockKeyhole,
  LogOut,
  Mail,
  Menu,
  MessageCircle,
  MonitorCog,
  Phone,
  Search,
  ShieldCheck,
  Smartphone,
  Sparkles,
  UsersRound,
  Wrench,
  X,
  Zap,
} from "lucide-react";

type View = "login" | "customer" | "admin";
type Status = "Em análise" | "Em andamento" | "Concluído";
type Order = {
  id: string;
  client: string;
  service: string;
  device: string;
  date: string;
  status: Status;
};

const statusOrder: Status[] = ["Em análise", "Em andamento", "Concluído"];
const initialOrders: Order[] = [
  { id: "OS-2025-0842", client: "Marcos Vinícius", service: "Formatação com backup", device: "Notebook Lenovo IdeaPad 3", date: "18 jun 2025", status: "Em andamento" },
  { id: "OS-2025-0841", client: "Ana Clara", service: "Troca de tela", device: "Notebook Dell Inspiron", date: "18 jun 2025", status: "Em análise" },
  { id: "OS-2025-0838", client: "Paulo Henrique", service: "Limpeza completa", device: "Desktop Gamer", date: "17 jun 2025", status: "Concluído" },
  { id: "OS-2025-0836", client: "Juliana Reis", service: "Upgrade de memória", device: "Notebook Acer Aspire", date: "16 jun 2025", status: "Em andamento" },
];

function Brand() {
  return (
    <div className="flex items-center gap-3">
      <div className="brand-mark"><MonitorCog size={24} /></div>
      <div>
        <div className="font-display text-sm font-bold tracking-[0.16em] text-white">RENAN TECH</div>
        <div className="text-[10px] font-semibold tracking-[0.34em] text-cyan-300">PREMIUM</div>
      </div>
    </div>
  );
}

function GoogleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path fill="#4285F4" d="M21.6 12.23c0-.71-.06-1.4-.18-2.07H12v3.92h5.38a4.6 4.6 0 0 1-2 3.02v2.54h3.24c1.9-1.75 2.98-4.32 2.98-7.41Z" />
      <path fill="#34A853" d="M12 22c2.7 0 4.98-.9 6.63-2.36l-3.25-2.54c-.9.6-2.05.96-3.38.96-2.61 0-4.82-1.76-5.61-4.13H3.04v2.62A10 10 0 0 0 12 22Z" />
      <path fill="#FBBC05" d="M6.39 13.93A6 6 0 0 1 6.07 12c0-.67.11-1.32.32-1.93V7.45H3.04A10 10 0 0 0 2 12c0 1.62.39 3.17 1.04 4.55l3.35-2.62Z" />
      <path fill="#EA4335" d="M12 5.94c1.47 0 2.79.5 3.83 1.5l2.87-2.88A9.63 9.63 0 0 0 12 2a10 10 0 0 0-8.96 5.45l3.35 2.62C7.18 7.7 9.39 5.94 12 5.94Z" />
    </svg>
  );
}

function Login({ onEnter }: { onEnter: (view: View) => void }) {
  const [method, setMethod] = useState<"options" | "phone" | "email">("options");
  return (
    <main className="login-shell">
      <section className="login-showcase">
        <div className="showcase-overlay" />
        <div className="relative z-10 flex h-full flex-col justify-between">
          <Brand />
          <div className="max-w-xl pb-8">
            <div className="eyebrow mb-5"><Sparkles size={14} /> Atendimento premium</div>
            <h1 className="font-display text-4xl font-bold leading-[1.12] text-white xl:text-6xl">
              Tecnologia cuidada com <span className="text-gradient">precisão.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-slate-300">
              Acompanhe seus serviços, receba atualizações e fale diretamente com nosso time em um só lugar.
            </p>
            <div className="mt-9 flex flex-wrap gap-6 text-sm text-slate-300">
              {[[Zap, "Mais velocidade"], [ShieldCheck, "Total confiança"], [Headphones, "Suporte especializado"]].map(([Icon, text]) => (
                <span className="flex items-center gap-2" key={text as string}>
                  <span className="feature-icon"><Icon size={15} /></span>{text as string}
                </span>
              ))}
            </div>
          </div>
          <p className="text-xs text-slate-500">© 2026 Renan Tech Premium. Todos os direitos reservados.</p>
        </div>
      </section>

      <section className="login-panel">
        <div className="w-full max-w-md">
          <div className="mb-10 lg:hidden"><Brand /></div>
          {method !== "options" && (
            <button className="mb-8 flex items-center gap-2 text-sm text-slate-400 hover:text-white" onClick={() => setMethod("options")}>
              <ArrowLeft size={16} /> Voltar
            </button>
          )}
          <div className="mb-8">
            <div className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-cyan-300">Portal do cliente</div>
            <h2 className="font-display text-3xl font-bold text-white">
              {method === "options" ? "Bem-vindo de volta" : method === "phone" ? "Acesse pelo celular" : "Entre com seu e-mail"}
            </h2>
            <p className="mt-3 leading-relaxed text-slate-400">
              {method === "options" ? "Escolha uma opção para entrar e acompanhar seus serviços." : method === "phone" ? "Enviaremos um código de confirmação por SMS." : "Use os dados cadastrados no seu atendimento."}
            </p>
          </div>

          {method === "options" && (
            <div className="space-y-3">
              <button className="auth-button" onClick={() => onEnter("customer")}><GoogleIcon /> Continuar com Google <ArrowRight className="ml-auto" size={17} /></button>
              <button className="auth-button" onClick={() => setMethod("phone")}><Smartphone size={20} className="text-cyan-300" /> Continuar com telefone <ArrowRight className="ml-auto" size={17} /></button>
              <button className="auth-button" onClick={() => setMethod("email")}><Mail size={20} className="text-cyan-300" /> Continuar com e-mail <ArrowRight className="ml-auto" size={17} /></button>
            </div>
          )}
          {method === "phone" && (
            <div>
              <label className="field-label" htmlFor="phone">Número de telefone</label>
              <div className="input-wrap"><span className="border-r border-white/10 pr-3">+55</span><input id="phone" placeholder="(31) 99999-9999" type="tel" /></div>
              <button className="primary-button mt-4" onClick={() => onEnter("customer")}>Enviar código <ArrowRight size={17} /></button>
            </div>
          )}
          {method === "email" && (
            <div className="space-y-4">
              <div><label className="field-label" htmlFor="email-input">E-mail</label><div className="input-wrap"><Mail size={18} /><input id="email-input" placeholder="voce@email.com" type="email" /></div></div>
              <div><label className="field-label" htmlFor="password-input">Senha</label><div className="input-wrap"><LockKeyhole size={18} /><input id="password-input" placeholder="Sua senha" type="password" /></div></div>
              <button className="primary-button" onClick={() => onEnter("customer")}>Entrar <ArrowRight size={17} /></button>
            </div>
          )}
          <div className="my-7 flex items-center gap-4"><span className="h-px flex-1 bg-white/10" /><span className="text-xs uppercase tracking-widest text-slate-600">Acesso seguro</span><span className="h-px flex-1 bg-white/10" /></div>
          <button className="mx-auto flex items-center gap-2 text-sm text-slate-500 hover:text-cyan-300" onClick={() => onEnter("admin")}>
            <ShieldCheck size={15} /> Visualizar painel administrativo
          </button>
          <p className="mt-8 text-center text-xs text-slate-600">Ao continuar, você concorda com os Termos de Uso e a Política de Privacidade.</p>
        </div>
      </section>
    </main>
  );
}

function Sidebar({ admin, open, close, logout }: { admin: boolean; open: boolean; close: () => void; logout: () => void }) {
  const items = admin
    ? [[LayoutDashboard, "Visão geral"], [FileText, "Ordens de serviço"], [UsersRound, "Clientes"], [MessageCircle, "Mensagens"]]
    : [[LayoutDashboard, "Visão geral"], [Wrench, "Meus serviços"], [MessageCircle, "Mensagens"], [CircleUserRound, "Minha conta"]];
  return (
    <>
      {open && <button className="fixed inset-0 z-30 bg-slate-950/70 lg:hidden" aria-label="Fechar menu" onClick={close} />}
      <aside className={`sidebar ${open ? "sidebar-open" : ""}`}>
        <div className="flex items-center justify-between"><Brand /><button className="text-slate-500 lg:hidden" onClick={close}><X size={22} /></button></div>
        <nav className="mt-12 flex-1 space-y-2">
          {items.map(([Icon, label], i) => <button key={label as string} className={`nav-item ${i === 0 ? "nav-item-active" : ""}`}><Icon size={19} />{label as string}</button>)}
        </nav>
        <div className="rounded-2xl border border-cyan-400/10 bg-cyan-400/5 p-4">
          <div className="mb-2 flex items-center gap-2 text-sm font-semibold text-white"><Headphones size={16} className="text-cyan-300" />Precisa de ajuda?</div>
          <p className="text-xs leading-relaxed text-slate-500">Nosso suporte está disponível pelo WhatsApp.</p>
          <a className="mt-3 inline-flex items-center gap-2 text-xs font-bold text-cyan-300" href="https://wa.me/5531992372280" target="_blank" rel="noreferrer">Falar com suporte <ArrowRight size={13} /></a>
        </div>
        <button className="nav-item mt-5" onClick={logout}><LogOut size={19} /> Sair</button>
      </aside>
    </>
  );
}

function Header({ admin, menu }: { admin: boolean; menu: () => void }) {
  return (
    <header className="dashboard-header">
      <button className="text-slate-400 lg:hidden" onClick={menu}><Menu size={24} /></button>
      <div className="relative ml-auto hidden max-w-xs flex-1 md:block"><Search size={17} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" /><input className="search-input" placeholder="Buscar ordem de serviço" /></div>
      <button className="icon-button relative"><Bell size={19} /><span className="absolute right-2 top-2 h-1.5 w-1.5 rounded-full bg-cyan-300" /></button>
      <div className="flex items-center gap-3 border-l border-white/10 pl-4">
        <div className="avatar">{admin ? "RT" : "MV"}</div>
        <div className="hidden sm:block"><div className="text-sm font-semibold text-white">{admin ? "Renan Tech" : "Marcos Vinícius"}</div><div className="text-xs text-slate-500">{admin ? "Administrador" : "Cliente"}</div></div>
        <ChevronDown size={15} className="text-slate-500" />
      </div>
    </header>
  );
}

function StatusPill({ status }: { status: Status }) {
  return <span className={`status-pill status-${status.replace(" ", "-").toLowerCase()}`}><span />{status}</span>;
}

function Metrics({ admin = false }: { admin?: boolean }) {
  const data = admin
    ? [[FileText, "24", "Ordens no mês", "cyan"], [Clock3, "06", "Em análise", "amber"], [Wrench, "09", "Em andamento", "blue"], [CheckCircle2, "09", "Concluídas", "emerald"]]
    : [[Wrench, "01", "Serviço ativo", "cyan"], [Clock3, "2 dias", "Previsão de conclusão", "amber"], [CheckCircle2, "03", "Serviços concluídos", "emerald"]];
  return (
    <div className={`mb-6 grid gap-4 ${admin ? "sm:grid-cols-2 xl:grid-cols-4" : "md:grid-cols-3"}`}>
      {data.map(([Icon, value, label, color]) => (
        <div className="metric-card" key={label as string}><div className={`metric-icon metric-${color}`}><Icon size={20} /></div><div><div className="text-2xl font-bold text-white">{value as string}</div><div className="text-xs text-slate-500">{label as string}</div></div></div>
      ))}
    </div>
  );
}

function Customer() {
  return (
    <div className="dashboard-content">
      <div className="mb-8"><div className="text-sm text-cyan-300">Quarta-feira, 18 de junho</div><h1 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">Olá, Marcos. Tudo certo?</h1><p className="mt-2 text-slate-500">Acompanhe por aqui cada etapa do seu atendimento.</p></div>
      <Metrics />
      <section className="content-card overflow-hidden">
        <div className="flex flex-wrap items-start justify-between gap-4 border-b border-white/10 p-6">
          <div><div className="mb-2 flex items-center gap-3"><span className="text-xs font-bold text-cyan-300">OS-2025-0842</span><StatusPill status="Em andamento" /></div><h2 className="text-xl font-bold text-white">Formatação com backup</h2><p className="mt-1 text-sm text-slate-500">Notebook Lenovo IdeaPad 3</p></div>
          <button className="secondary-button"><FileText size={16} /> Ver detalhes</button>
        </div>
        <div className="p-6 sm:p-8">
          <div className="mb-7 flex items-center justify-between"><h3 className="font-semibold text-white">Andamento do serviço</h3><span className="text-xs text-slate-500">Atualizado hoje às 10:42</span></div>
          <div className="service-timeline">
            {statusOrder.map((status, i) => (
              <div className="timeline-step" key={status}><div className={`timeline-dot ${i <= 1 ? "timeline-dot-active" : ""}`}>{i === 0 ? <Check size={15} /> : i === 1 ? <Wrench size={15} /> : <CheckCircle2 size={15} />}</div><div><div className={`text-sm font-semibold ${i <= 1 ? "text-white" : "text-slate-600"}`}>{status}</div><div className="mt-1 text-xs text-slate-600">{i === 0 ? "18 jun, 09:15" : i === 1 ? "18 jun, 10:42" : "Aguardando"}</div></div></div>
            ))}
          </div>
          <div className="mt-8 rounded-2xl border border-cyan-400/10 bg-cyan-400/[0.04] p-5"><div className="flex gap-4"><Gauge size={20} className="mt-0.5 text-cyan-300" /><div><h3 className="text-sm font-semibold text-white">Diagnóstico concluído</h3><p className="mt-2 text-sm leading-relaxed text-slate-400">Backup realizado com sucesso. A formatação foi iniciada e o equipamento está dentro do prazo previsto.</p></div></div></div>
        </div>
      </section>
      <div className="mt-6 grid gap-6 xl:grid-cols-[1fr_0.58fr]">
        <section className="content-card p-6"><div className="mb-5 flex items-center justify-between"><h2 className="font-display text-lg font-bold text-white">Serviços recomendados</h2><button className="text-xs font-bold text-cyan-300">Ver todos</button></div>
          {[["Formatação com backup", "R$ 120"], ["Limpeza de computador", "R$ 100"], ["Troca de tela notebook", "R$ 120"]].map(([name, price]) => <div key={name} className="flex items-center justify-between border-t border-white/10 py-4 first:border-0 first:pt-0"><div className="flex items-center gap-3"><div className="small-service-icon"><MonitorCog size={17} /></div><div><div className="text-sm font-semibold text-white">{name}</div><div className="text-xs text-slate-500">Garantia de 90 dias</div></div></div><span className="font-bold text-cyan-300">{price}</span></div>)}
        </section>
        <section className="contact-card"><MessageCircle size={26} className="text-cyan-300" /><h2 className="mt-5 font-display text-lg font-bold text-white">Fale com a gente</h2><p className="mt-2 text-sm leading-relaxed text-slate-400">Tire dúvidas ou envie informações sobre seu equipamento.</p><a className="primary-button mt-6" href="https://wa.me/5531992372280" target="_blank" rel="noreferrer">Abrir WhatsApp <ArrowRight size={17} /></a></section>
      </div>
    </div>
  );
}

function Admin() {
  const [orders, setOrders] = useState(initialOrders);
  const [notice, setNotice] = useState("");
  function advance(id: string) {
    setOrders((current) => current.map((order) => {
      if (order.id !== id) return order;
      const status = statusOrder[Math.min(statusOrder.indexOf(order.status) + 1, 2)];
      setNotice(`${id} atualizada para “${status}”.`);
      return { ...order, status };
    }));
    window.setTimeout(() => setNotice(""), 2500);
  }
  return (
    <div className="dashboard-content">
      {notice && <div className="toast-message"><CheckCircle2 size={18} />{notice}</div>}
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4"><div><div className="text-sm text-cyan-300">Painel administrativo</div><h1 className="mt-2 font-display text-2xl font-bold text-white sm:text-3xl">Visão geral</h1><p className="mt-2 text-slate-500">Acompanhe a operação e atualize seus clientes.</p></div><button className="primary-button w-auto px-5"><FileText size={17} /> Nova ordem</button></div>
      <Metrics admin />
      <section className="content-card overflow-hidden">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-white/10 p-6"><div><h2 className="font-display text-lg font-bold text-white">Ordens recentes</h2><p className="mt-1 text-sm text-slate-500">Atualize o andamento e mantenha o cliente informado.</p></div><button className="secondary-button"><Search size={15} /> Buscar</button></div>
        <div className="hidden overflow-x-auto md:block">
          <table className="w-full text-left"><thead><tr className="text-xs uppercase tracking-wider text-slate-600"><th>Ordem</th><th>Cliente e equipamento</th><th>Status</th><th>Entrada</th><th className="text-right">Ação</th></tr></thead>
            <tbody>{orders.map((o) => <tr key={o.id}><td><div className="font-semibold text-cyan-300">{o.id}</div><div className="text-xs text-slate-500">{o.service}</div></td><td><div className="font-semibold text-white">{o.client}</div><div className="text-xs text-slate-500">{o.device}</div></td><td><StatusPill status={o.status} /></td><td className="text-sm text-slate-400">{o.date}</td><td className="text-right"><button className="table-action" disabled={o.status === "Concluído"} onClick={() => advance(o.id)}>{o.status === "Concluído" ? "Finalizada" : "Avançar"} <ArrowRight size={14} /></button></td></tr>)}</tbody>
          </table>
        </div>
        <div className="divide-y divide-white/10 md:hidden">{orders.map((o) => <div className="p-5" key={o.id}><div className="flex items-start justify-between gap-3"><div><div className="text-xs font-bold text-cyan-300">{o.id}</div><div className="mt-2 font-semibold text-white">{o.client}</div><div className="text-xs text-slate-500">{o.device}</div></div><StatusPill status={o.status} /></div><button className="secondary-button mt-4 w-full justify-center" disabled={o.status === "Concluído"} onClick={() => advance(o.id)}>{o.status === "Concluído" ? "Finalizada" : "Avançar status"} <ArrowRight size={14} /></button></div>)}</div>
      </section>
      <div className="mt-6 grid gap-6 lg:grid-cols-3"><section className="content-card p-6 lg:col-span-2"><h2 className="font-display text-lg font-bold text-white">Atividade recente</h2>{[[CheckCircle2, "OS-2025-0838 foi concluída"], [MessageCircle, "Nova mensagem de Ana Clara"], [UserRound, "Novo cliente cadastrado"]].map(([Icon, label]) => <div className="mt-5 flex items-center gap-4" key={label as string}><div className="small-service-icon"><Icon size={16} /></div><div className="text-sm text-slate-300">{label as string}</div></div>)}</section><section className="content-card p-6"><Phone size={21} className="text-cyan-300" /><h2 className="mt-4 font-display text-lg font-bold text-white">Atendimentos</h2><p className="mt-2 text-sm text-slate-500">Belo Horizonte e região metropolitana.</p><div className="mt-5 border-t border-white/10 pt-5 text-sm text-slate-300">(31) 99237-2280</div></section></div>
    </div>
  );
}

function Portal({ admin, logout }: { admin: boolean; logout: () => void }) {
  const [menu, setMenu] = useState(false);
  return <div className="portal-shell"><Sidebar admin={admin} open={menu} close={() => setMenu(false)} logout={logout} /><div className="min-w-0 flex-1 lg:ml-64"><Header admin={admin} menu={() => setMenu(true)} />{admin ? <Admin /> : <Customer />}</div></div>;
}

export default function App() {
  const [view, setView] = useState<View>("login");
  return view === "login" ? <Login onEnter={setView} /> : <Portal admin={view === "admin"} logout={() => setView("login")} />;
}
