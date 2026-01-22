import * as React from "react"
import { cn } from "@/lib/utils"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "./button"

const Carousel = React.forwardRef(
  (
    {
      className,
      children,
      autoPlay = false,
      interval = 5000,
      showArrows = true,
      showDots = true,
      ...props
    },
    ref
  ) => {
    const [currentIndex, setCurrentIndex] = React.useState(0)
    const items = React.Children.toArray(children)
    const totalItems = items.length

    React.useEffect(() => {
      if (!autoPlay || totalItems <= 1) return
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % totalItems)
      }, interval)
      return () => clearInterval(timer)
    }, [autoPlay, interval, totalItems])

    const goToSlide = (index) => {
      setCurrentIndex(index)
    }

    const goToPrev = () => {
      setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems)
    }

    const goToNext = () => {
      setCurrentIndex((prev) => (prev + 1) % totalItems)
    }

    return (
      <div ref={ref} className={cn("relative overflow-hidden", className)} {...props}>
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {items.map((item, index) => (
            <div key={item.key ?? `carousel-item-${index}`} className="w-full flex-shrink-0">
              {item}
            </div>
          ))}
        </div>

        {showArrows && totalItems > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-md"
              onClick={goToPrev}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white shadow-md"
              onClick={goToNext}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </>
        )}

        {showDots && totalItems > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {items.map((item, index) => (
              <button
                key={item.key ?? `carousel-dot-${index}`}
                onClick={() => goToSlide(index)}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all",
                  index === currentIndex ? "bg-primary w-6" : "bg-white/60 hover:bg-white"
                )}
              />
            ))}
          </div>
        )}
      </div>
    )
  }
)
Carousel.displayName = "Carousel"

const CarouselItem = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("w-full", className)} {...props} />
))
CarouselItem.displayName = "CarouselItem"

export { Carousel, CarouselItem }
