import ConfirmText from "./ConfirmText";

export default {
    component: ConfirmText,
    title: "Atoms/Esentials/ConfirmText",
    tags: ["autodocs"]
}

//Stories "c-big", "cel-pequeño", "cel", "lap-grande", "lap-pequeña", "lap", "monitor", "tablet"
export const ConfirmTextCBig = {
    args: {
        label: "Nombre",
        op: "Opción: ",
        userData: undefined,
        movil: true,
        size: "c-big",
    }
};

export const ConfirmTextCelPequeno = {
    args: {
        label: "Nombre",
        op: "Opción: ",
        userData: undefined,
        movil: true,
        size: "cel-pequeño",
    }
};

export const ConfirmTextCel = {
    args: {
        label: "Nombre",
        op: "Opción: ",
        userData: undefined,
        movil: true,
        size: "cel",
    }
};

export const ConfirmTextLapGrande = {
    args: {
        label: "Nombre",
        op: "Opción: ",
        userData: undefined,
        movil: false,
        size: "lap-grande",
    }
};

export const ConfirmTextLapPequena = {
    args: {
        label: "Nombre",
        op: "Opción: ",
        userData: undefined,
        movil: false,
        size: "lap-pequeña",
    }
};

export const ConfirmTextLap = {
    args: {
        label: "Nombre",
        op: "Opción: ",
        userData: undefined,
        movil: false,
        size: "lap",
    }
};

export const ConfirmTextMonitor = {
    args: {
        label: "Nombre",
        op: "Opción: ",
        userData: undefined,
        movil: false,
        size: "monitor",
    }
};

export const ConfirmTextTablet = {
    args: {
        label: "Nombre",
        op: "Opción: ",
        userData: undefined,
        movil: false,
        size: "tablet",
    }
};