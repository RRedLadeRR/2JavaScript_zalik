document.getElementById(info);

class Region {
    constructor(name, area, population) {
        this.name = name;
        this.area = area;
        this.population = population;
    }

    about() {
        return `Region: ${this.name}<br>Area: ${this.area} км2<br>Population: ${this.population}`;
    }
}

class Country extends Region {
    constructor(name, area, population, capital) {
        super(name, area, population);
        this.capital = capital;
    }

    about() {
        return super.about() + `<br>Capital: ${this.capital}`;
    }
}

class City extends Region {
    constructor(name, area, population, boroughs) {
        super(name, area, population);
        this.boroughs = boroughs;
    }

    about() {
        return super.about() + `<br>Boroughs: ${this.boroughs.join(", ")}`;
    }
}

const ukraine = new Country("Україна", 603628, 41000000, "Київ");
info.innerHTML += (ukraine.about());

const kyiv = new City("Київ", 839, 2950000, ["Печерський", "Шевченківський", "Дарницький"]);
info.innerHTML += ("<br>" + kyiv.about());