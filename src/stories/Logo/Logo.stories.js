import Logo from "./Logo";

export default {
    component: Logo,
    title: "Atoms/Esentials/Logo",
    tags: ["autodocs"],
}

//Stories "c-big", "cel-pequeño", "cel", "lap-grande", "lap-pequeña", "lap", "monitor", "tablet"
export const LogoCBig = {
    args: {
        label: "Universidad-Distrital",
        movil: true,
        size: "c-big",
    }
};

export const LogoCelPequeno = {
    args: {
        label: "Universidad-Distrital",
        movil: true,
        size: "cel-pequeño",
    }
};

export const LogoCel = {
    args: {
        label: "Universidad-Distrital",
        movil: true,
        size: "cel",
    }
};

export const LogoLapGrande = {
    args: {
        label: "Universidad-Distrital",
        movil: false,
        size: "lap-grande",
    }
};

export const LogoLapPequena = {
    args: {
        label: "Universidad-Distrital",
        movil: false,
        size: "lap-pequeña",
    }
};

export const LogoLap = {
    args: {
        label: "Universidad-Distrital",
        movil: false,
        size: "lap",
    }
};

export const LogoMonitor = {
    args: {
        label: "Universidad-Distrital",
        movil: false,
        size: "monitor",
    }
};

export const LogoTablet = {
    args: {
        label: "Universidad-Distrital",
        movil: false,
        size: "tablet",
    }
};