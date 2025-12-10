import {AlertCircle, Home} from 'lucide-react';
import {ImageWithFallback} from "@/components/ui/image-with-fallback.tsx";
import backgroundImage from '../../../assets/404-image.jpg';
import logo from "../../../assets/logo-bemcuidar.jpg";

export default function App() {
    return (
        <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-teal-50 flex flex-col">
            {/* Header */}
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                            <a href="#home" className="flex items-center gap-2">
                                <img
                                    src={logo}
                                    alt="Bem Cuidar Logo"
                                    className="h-12 w-auto rounded-full object-cover border-2 border-primary/20"
                                />
                                <span className="font-heading text-xl font-bold text-primary hidden sm:inline-block">
                                    Bem Cuidar
                                </span>
                            </a>
                        </div>
                        <span className="text-gray-800">Bem Cuidar</span>
                    </div>
                    <button
                        onClick={() => window.location.href = '/'}
                        className="hidden sm:block px-6 py-2 bg-emerald-700 hover:bg-emerald-800 text-white rounded-full transition-colors"
                    >
                        Voltar ao Início
                    </button>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-5xl w-full grid md:grid-cols-2 gap-8 items-center">
                    {/* Left Side - Text Content */}
                    <div className="text-center md:text-left space-y-6">
                        <div
                            className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-100 text-emerald-800 rounded-full">
                            <AlertCircle className="w-5 h-5"/>
                            <span>Página não encontrada</span>
                        </div>

                        <div className="space-y-4">
                            <h1 className="text-gray-800">
                                <span className="block text-8xl md:text-9xl">404</span>
                            </h1>
                            <h2 className="text-gray-700">
                                Ops! Parece que você se perdeu
                            </h2>
                            <p className="text-gray-600 max-w-md mx-auto md:mx-0">
                                A página que você está procurando não existe ou foi movida. Não se preocupe, estamos
                                aqui para ajudar você a encontrar o caminho de volta.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                            <button
                                onClick={() => window.location.href = '/'}
                                className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-emerald-700 hover:bg-emerald-800 text-white rounded-full transition-colors shadow-lg hover:shadow-xl"
                            >
                                <Home className="w-5 h-5"/>
                                Voltar para Home
                            </button>
                            <button
                                onClick={() => window.history.back()}
                                className="px-8 py-3 bg-white hover:bg-gray-50 text-emerald-700 rounded-full transition-colors border-2 border-emerald-700"
                            >
                                Página Anterior
                            </button>
                        </div>
                    </div>

                    {/* Right Side - Image */}
                    <div className="relative hidden md:block">
                        <div
                            className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-teal-600/20 rounded-3xl transform rotate-3"></div>
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                            <ImageWithFallback
                                src={backgroundImage}
                                alt="Bem Cuidar"
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 to-transparent"></div>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="bg-white border-t border-gray-200 py-6">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-600">
                    <p>&copy; 2025 Bem Cuidar - Cuidado, Segurança e Carinho</p>
                </div>
            </footer>
        </div>
    );
}
