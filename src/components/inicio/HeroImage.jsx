import { Link } from "react-router-dom"
import { Card, Button } from "flowbite-react"

export default function HeroImage(){
    return(
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
          <Card className="bg-transparent border-transparent shadow-none p-4">
            <div className="flex flex-col justify-center h-full space-y-4">
              <h1 className="text-3xl md:text-5xl font-bold text-black leading-tight">
                Encuentra la mejor aseguradora para ti
              </h1>
              <p className="text-gray-500 text-sm md:text-base">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti, eos. Reiciendis excepturi velit aliquid veritatis omnis minima facere laborum ullam qui placeat quibusdam!
              </p>
              <div>
                <Button
                        pill
                        as={Link}
                        to="directorio"
                        className="w-fit bg-vinotinto color-white">
                  Explorar Directorio
                </Button>
              </div>
            </div>
          </Card>

          <Card className="bg-transparent border-transparent shadow-none h-64 md:h-80 flex items-center justify-center"
                imgSrc="/seguro-de-salud.png" 
                imgAlt="Descripción de la imagen">
          </Card>
        </section>
    )
}