import React, {useCallback, useState} from 'react'
import {cn} from '@/lib/utils'

// SVG de erro base64 (o SVG é um ícone simples de imagem quebrada/falha)
// NOTA: Para melhorar a acessibilidade e o estilo, ajustei ligeiramente
// a forma como o SVG é renderizado.
const ERROR_IMG_SRC =
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    // Adiciona a prop opcional para um fallback personalizado, caso queira
    fallbackSrc?: string;
}

export function ImageWithFallback({
                                      src,
                                      alt,
                                      style,
                                      className,
                                      fallbackSrc,
                                      ...rest
                                  }: ImageWithFallbackProps) {
    const [didError, setDidError] = useState(false)

    // Use useCallback para garantir que a função de erro não mude a cada render
    const handleError = useCallback(() => {
        setDidError(true)
    }, [])

    // Se houve erro ou o src original for nulo/vazio, renderiza o fallback
    if (didError || !src) {
        return (
            <div
                className={cn(
                    'inline-block bg-muted/50 text-center align-middle flex items-center justify-center w-full h-full text-muted-foreground',
                    className,
                )}
                style={style}
                {...rest}
            >
                <img
                    src={fallbackSrc || ERROR_IMG_SRC}
                    alt={alt ? `Erro ao carregar imagem: ${alt}` : 'Erro ao carregar imagem'}
                    className="w-1/2 h-1/2 object-contain opacity-50"
                    {...rest}
                    data-original-url={src}
                />
            </div>
        )
    }

    // Se não houve erro, renderiza a imagem normal
    return (
        <img
            src={src}
            alt={alt}
            className={className}
            style={style}
            {...rest}
            onError={handleError}
        />
    )
}