from models import Car, Truck

def main():
    my_car = Car("Tesla", "Model 3", 2023, "Electric")
    my_truck = Truck("Ford", "F-150", 2022, 5000)

    fleet = [my_car, my_truck]

    for vehicle in fleet:
        print(f"Vehicle Info: {vehicle}")
        print(f"Action: {vehicle.start_engine()}\n")

if __name__ == "__main__":
    main()