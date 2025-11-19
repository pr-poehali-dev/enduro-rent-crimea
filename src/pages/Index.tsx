import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-heading font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            CRIMEA MOTO
          </h1>
          <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity">
            Забронировать
          </Button>
        </div>
      </header>

      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20" />
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/projects/ac797038-6f96-4f0e-bc44-2c713a9fce3e/files/92d3c9f5-8f6f-4d6c-ab8f-ea8b910ac128.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="font-heading font-extrabold text-6xl md:text-8xl mb-6 leading-tight">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Эндуро и Квадро
              </span>
              <br />
              <span className="text-foreground">прогулки по Крыму</span>
            </h2>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Незабываемые приключения на мотоциклах и квадроциклах по живописным горным маршрутам полуострова
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up">
              <Button size="lg" className="text-lg px-8 py-6 bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all hover:scale-105">
                <Icon name="Calendar" className="mr-2" size={20} />
                Забронировать поездку
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-6 border-2 hover:bg-accent/10 transition-all hover:scale-105">
                <Icon name="Phone" className="mr-2" size={20} />
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <Icon name="ChevronDown" size={32} className="text-primary" />
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <h3 className="font-heading font-bold text-4xl md:text-5xl text-center mb-16 animate-fade-in">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Наши услуги
            </span>
          </h3>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card className="group overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-scale-in">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/ac797038-6f96-4f0e-bc44-2c713a9fce3e/files/82834661-dcb8-43b2-bf4c-d8648d2727ce.jpg"
                  alt="Эндуро прогулки"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-2 bg-primary rounded-lg">
                      <Icon name="Bike" size={24} className="text-white" />
                    </div>
                    <h4 className="font-heading font-bold text-2xl text-white">Эндуро прогулки</h4>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  Покорите горные тропы Крыма на мощных эндуро мотоциклах. Адреналин, скорость и захватывающие виды!
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm">
                    <Icon name="Check" size={16} className="text-primary" />
                    <span>Профессиональные инструкторы</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Icon name="Check" size={16} className="text-primary" />
                    <span>Экипировка в комплекте</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Icon name="Check" size={16} className="text-primary" />
                    <span>Маршруты разной сложности</span>
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="group overflow-hidden border-2 hover:border-secondary/50 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="relative h-64 overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/ac797038-6f96-4f0e-bc44-2c713a9fce3e/files/c0933ca2-9e36-4bf3-ab95-5987b0f435c9.jpg"
                  alt="Квадро прогулки"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-2 bg-secondary rounded-lg">
                      <Icon name="Truck" size={24} className="text-white" />
                    </div>
                    <h4 className="font-heading font-bold text-2xl text-white">Квадро прогулки</h4>
                  </div>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground mb-4">
                  Исследуйте живописные уголки Крыма на комфортных квадроциклах. Идеально для всей семьи!
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2 text-sm">
                    <Icon name="Check" size={16} className="text-secondary" />
                    <span>Безопасные маршруты</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Icon name="Check" size={16} className="text-secondary" />
                    <span>Подходит для начинающих</span>
                  </li>
                  <li className="flex items-center gap-2 text-sm">
                    <Icon name="Check" size={16} className="text-secondary" />
                    <span>Фото и видео сопровождение</span>
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-secondary to-accent hover:opacity-90">
                  Подробнее
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-24 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-heading font-bold text-4xl md:text-5xl text-center mb-6 animate-fade-in">
              <span className="bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
                Почему выбирают нас?
              </span>
            </h3>
            <p className="text-center text-muted-foreground mb-16 text-lg">
              История проката началась в Судаке с небольшого проката скутеров и выросла в лучший сервис проката техники в Крыму
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-2xl bg-background hover:shadow-lg transition-all hover:-translate-y-1 animate-fade-in">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" size={32} className="text-white" />
                </div>
                <h4 className="font-heading font-semibold text-xl mb-3">Опытная команда</h4>
                <p className="text-muted-foreground">
                  Инструкторы с многолетним опытом и знанием всех маршрутов
                </p>
              </div>

              <div className="text-center p-6 rounded-2xl bg-background hover:shadow-lg transition-all hover:-translate-y-1 animate-fade-in" style={{ animationDelay: '0.1s' }}>
                <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Wrench" size={32} className="text-white" />
                </div>
                <h4 className="font-heading font-semibold text-xl mb-3">Своя мастерская</h4>
                <p className="text-muted-foreground">
                  Техническое обслуживание на высшем уровне для вашей безопасности
                </p>
              </div>

              <div className="text-center p-6 rounded-2xl bg-background hover:shadow-lg transition-all hover:-translate-y-1 animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="MapPin" size={32} className="text-white" />
                </div>
                <h4 className="font-heading font-semibold text-xl mb-3">Лучшие маршруты</h4>
                <p className="text-muted-foreground">
                  Уникальные живописные тропы по всему Крымскому полуострову
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-b from-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <h3 className="font-heading font-bold text-4xl md:text-5xl text-center mb-6 animate-fade-in">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Забронировать поездку
              </span>
            </h3>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Оставьте заявку и мы свяжемся с вами в ближайшее время
            </p>

            <Card className="border-2 shadow-xl animate-scale-in">
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ваше имя</label>
                    <Input placeholder="Введите ваше имя" className="h-12" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Телефон</label>
                    <Input placeholder="+7 (___) ___-__-__" className="h-12" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Тип прогулки</label>
                    <div className="flex gap-3">
                      <Button type="button" variant="outline" className="flex-1 h-12 hover:border-primary">
                        <Icon name="Bike" className="mr-2" size={20} />
                        Эндуро
                      </Button>
                      <Button type="button" variant="outline" className="flex-1 h-12 hover:border-secondary">
                        <Icon name="Truck" className="mr-2" size={20} />
                        Квадро
                      </Button>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Комментарий</label>
                    <Textarea placeholder="Расскажите о ваших пожеланиях" className="min-h-24" />
                  </div>
                  <Button type="submit" size="lg" className="w-full h-14 text-lg bg-gradient-to-r from-primary via-secondary to-accent hover:opacity-90 transition-opacity">
                    <Icon name="Send" className="mr-2" size={20} />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h2 className="font-heading font-bold text-2xl mb-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                CRIMEA MOTO
              </h2>
              <p className="text-muted-foreground">Прокат эндуро и квадроциклов в Крыму</p>
            </div>
            <div className="flex gap-4">
              <Button size="icon" variant="outline" className="rounded-full hover:bg-primary/10">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full hover:bg-primary/10">
                <Icon name="Phone" size={20} />
              </Button>
              <Button size="icon" variant="outline" className="rounded-full hover:bg-primary/10">
                <Icon name="Mail" size={20} />
              </Button>
            </div>
          </div>
          <div className="text-center mt-8 text-sm text-muted-foreground">
            © 2024 Crimea Moto. Прокат эндуро мотоциклов в Крыму
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
