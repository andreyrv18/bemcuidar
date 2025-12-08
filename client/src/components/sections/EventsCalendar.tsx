import { useState } from "react";
import { Calendar as CalendarIcon, Clock, MapPin, Users, Plus, Trash2, Lock, LogIn, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface Event {
  id: number;
  day: string;
  month: string;
  title: string;
  time: string;
  location: string;
  audience: string;
  description: string;
  type: 'fixed' | 'special';
}

const initialEvents: Event[] = [
  {
    id: 1,
    day: "06",
    month: "DEZ",
    title: "Bola de Neve - Aniversariantes do Mês",
    time: "15:00 - 17:00",
    location: "Salão de Festas",
    audience: "Todos os residentes",
    description: "Celebração dos aniversariantes do mês com bolo, música e muita alegria",
    type: 'special'
  },
  {
    id: 2,
    day: "13",
    month: "DEZ",
    title: "Culto Congregação Cristã",
    time: "14:00 - 16:00",
    location: "Sala de Atividades",
    audience: "Aberto a todos",
    description: "Momento de fé e reflexão espiritual",
    type: 'fixed'
  },
  {
    id: 3,
    day: "14",
    month: "DEZ",
    title: "Encontro Espírita",
    time: "10:00 - 12:00",
    location: "Sala de Atividades",
    audience: "Aberto a todos",
    description: "Encontro espírita com passes e evangelização",
    type: 'fixed'
  },
  {
    id: 4,
    day: "27",
    month: "DEZ",
    title: "Culto Congregação Cristã",
    time: "14:00 - 16:00",
    location: "Sala de Atividades",
    audience: "Aberto a todos",
    description: "Momento de fé e reflexão espiritual",
    type: 'fixed'
  },
  {
    id: 5,
    day: "28",
    month: "DEZ",
    title: "Culto Universal",
    time: "10:00 - 12:00",
    location: "Sala de Atividades",
    audience: "Aberto a todos",
    description: "Culto da Igreja Universal do Reino de Deus",
    type: 'fixed'
  }
];

export function EventsCalendar() {
  const [events, setEvents] = useState<Event[]>(initialEvents);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);
  
  // Form State
  const [newEvent, setNewEvent] = useState({
    day: "",
    month: "DEZ",
    title: "",
    time: "",
    location: "",
    audience: "",
    description: ""
  });

  const handleLogin = () => {
    if (password === "admin123") {
      setIsAdmin(true);
      setIsLoginOpen(false);
      setLoginError(false);
      setPassword("");
    } else {
      setLoginError(true);
    }
  };

  const handleLogout = () => {
    setIsAdmin(false);
  };

  const handleAddEvent = () => {
    if (!newEvent.day || !newEvent.title) return;

    const event: Event = {
      id: Date.now(),
      day: newEvent.day.padStart(2, '0'),
      month: newEvent.month,
      title: newEvent.title,
      time: newEvent.time,
      location: newEvent.location,
      audience: newEvent.audience,
      description: newEvent.description,
      type: 'special'
    };

    setEvents([...events, event].sort((a, b) => parseInt(a.day) - parseInt(b.day)));
    setIsOpen(false);
    setNewEvent({
      day: "",
      month: "DEZ",
      title: "",
      time: "",
      location: "",
      audience: "",
      description: ""
    });
  };

  const handleDeleteEvent = (id: number) => {
    setEvents(events.filter(e => e.id !== id));
  };

  return (
    <section id="events" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-accent/30 to-transparent"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-4">
              Agenda de Eventos
            </h2>
            <p className="text-muted-foreground text-lg">
              Acompanhe nossa programação mensal. Oferecemos atividades religiosas, recreativas e comemorativas 
              para promover a interação e bem-estar de todos.
            </p>
          </div>
          
          <div className="flex gap-2">
            {!isAdmin ? (
              <Dialog open={isLoginOpen} onOpenChange={setIsLoginOpen}>
                <DialogTrigger asChild>
                  <Button variant="outline" className="border-primary/20 hover:bg-primary/5 rounded-full gap-2">
                    <Lock size={16} /> Área Administrativa
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[320px]">
                  <DialogHeader>
                    <DialogTitle>Acesso Administrativo</DialogTitle>
                    <DialogDescription>
                      Digite a senha para gerenciar eventos.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                      <Label htmlFor="password">Senha</Label>
                      <Input 
                        id="password" 
                        type="password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
                      />
                      {loginError && <p className="text-xs text-destructive">Senha incorreta. Tente novamente.</p>}
                    </div>
                  </div>
                  <DialogFooter>
                    <Button type="submit" onClick={handleLogin}>Entrar</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            ) : (
              <div className="flex gap-2">
                <Dialog open={isOpen} onOpenChange={setIsOpen}>
                  <DialogTrigger asChild>
                    <Button className="bg-primary hover:bg-primary/90 text-white rounded-full gap-2 shadow-lg">
                      <Plus size={18} /> Adicionar Evento
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                      <DialogTitle>Adicionar Novo Evento</DialogTitle>
                      <DialogDescription>
                        Insira os detalhes do evento para a agenda deste mês.
                      </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="day" className="text-right">Dia</Label>
                        <Input 
                          id="day" 
                          type="number" 
                          placeholder="DD" 
                          className="col-span-3" 
                          value={newEvent.day}
                          onChange={(e) => setNewEvent({...newEvent, day: e.target.value})}
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="title" className="text-right">Título</Label>
                        <Input 
                          id="title" 
                          placeholder="Nome do evento" 
                          className="col-span-3"
                          value={newEvent.title}
                          onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="time" className="text-right">Horário</Label>
                        <Input 
                          id="time" 
                          placeholder="14:00 - 16:00" 
                          className="col-span-3"
                          value={newEvent.time}
                          onChange={(e) => setNewEvent({...newEvent, time: e.target.value})}
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="location" className="text-right">Local</Label>
                        <Input 
                          id="location" 
                          placeholder="Sala de Atividades" 
                          className="col-span-3"
                          value={newEvent.location}
                          onChange={(e) => setNewEvent({...newEvent, location: e.target.value})}
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="audience" className="text-right">Público</Label>
                        <Input 
                          id="audience" 
                          placeholder="Aberto a todos" 
                          className="col-span-3"
                          value={newEvent.audience}
                          onChange={(e) => setNewEvent({...newEvent, audience: e.target.value})}
                        />
                      </div>
                      <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="desc" className="text-right">Desc.</Label>
                        <Textarea 
                          id="desc" 
                          placeholder="Detalhes do evento..." 
                          className="col-span-3"
                          value={newEvent.description}
                          onChange={(e) => setNewEvent({...newEvent, description: e.target.value})}
                        />
                      </div>
                    </div>
                    <DialogFooter>
                      <Button type="submit" onClick={handleAddEvent}>Salvar Evento</Button>
                    </DialogFooter>
                  </DialogContent>
                </Dialog>
                
                <Button 
                  variant="outline" 
                  size="icon" 
                  onClick={handleLogout} 
                  title="Sair do modo administrativo"
                  className="rounded-full border-destructive/20 text-destructive hover:bg-destructive/10"
                >
                  <LogOut size={18} />
                </Button>
              </div>
            )}
          </div>
        </div>

        <div className="grid gap-6">
          {events.length === 0 ? (
            <div className="text-center py-12 text-muted-foreground bg-accent/10 rounded-xl">
              Nenhum evento programado para este mês.
            </div>
          ) : (
            events.map((event) => (
              <div 
                key={event.id} 
                className="group flex flex-col md:flex-row bg-white border border-border/60 rounded-xl shadow-sm hover:shadow-md transition-all overflow-hidden relative"
              >
                {/* Date Block */}
                <div className="bg-primary/5 min-w-[120px] flex flex-col items-center justify-center p-6 border-b md:border-b-0 md:border-r border-border/60">
                  <span className="text-4xl font-bold text-primary tracking-tighter">{event.day}</span>
                  <span className="text-sm font-bold text-muted-foreground uppercase tracking-widest">{event.month}.</span>
                </div>

                {/* Content Block */}
                <div className="flex-grow p-6 flex flex-col justify-center">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                      {event.title}
                    </h3>
                    {isAdmin && (
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="text-muted-foreground hover:text-destructive -mt-2 -mr-2"
                        onClick={() => handleDeleteEvent(event.id)}
                        title="Remover evento"
                      >
                        <Trash2 size={18} />
                      </Button>
                    )}
                  </div>
                  
                  <div className="flex flex-wrap gap-x-6 gap-y-2 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-secondary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-secondary" />
                      <span>{event.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={16} className="text-secondary" />
                      <span>{event.audience}</span>
                    </div>
                  </div>

                  <p className="text-muted-foreground/80 leading-relaxed">
                    {event.description}
                  </p>
                </div>

                {/* Decorative Accent */}
                <div className={`absolute top-0 left-0 w-1 h-full ${event.type === 'fixed' ? 'bg-secondary' : 'bg-primary'}`}></div>
              </div>
            ))
          )}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
           <div className="bg-accent/20 p-4 rounded-lg flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-secondary"></div>
              <span className="text-sm text-foreground font-medium">Eventos Fixos (Semanais/Mensais)</span>
           </div>
           <div className="bg-accent/20 p-4 rounded-lg flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-primary"></div>
              <span className="text-sm text-foreground font-medium">Eventos Especiais</span>
           </div>
        </div>
      </div>
    </section>
  );
}
