class Alumno:
    def __init__(self, nombre, notas=None):
        self.__nombre = nombre
        # Inicializa las notas como lista vacía si no se reciben
        self.__notas = notas if notas is not None else []

    @property
    def nombre(self):
        return self.__nombre

    @property
    def notas(self):
        return self.__notas.copy()  # Devuelve una copia para proteger el atributo

    def agregar_nota(self, nota):
        if not (0 <= nota <= 10):
            raise ValueError(f"Nota fuera de rango (0-10): {nota}")
        self.__notas.append(nota)

    def media(self):
        if not self.__notas:
            raise ValueError(f"El alumno {self.__nombre} no tiene notas para calcular la media.")
        return sum(self.__notas) / len(self.__notas)
alumnos = [
    Alumno("Ana"),
    Alumno("Luis"),
    Alumno("Marta", [7, 8]),
    Alumno("Carlos")
]

datos_notas = [
    ("Ana", [9, 8, 11]),      # 11 lanzará excepción
    ("Luis", [5, 6, 6]),
    ("Carlos", [3])           # Añade una sola nota
]

for nombre, lista_notas in datos_notas:
    for alumno in alumnos:
        if alumno.nombre == nombre:
            for nota in lista_notas:
                try:
                    alumno.agregar_nota(nota)
                except ValueError as e:
                    print(f"Error al añadir nota: {e}")

for alumno in alumnos:
    try:
        promedio = alumno.media()
        print(f"{alumno.nombre} - Media: {promedio}")
    except ValueError as e:
        print(f"Error al calcular la media de {alumno.nombre}: {e}")
        
