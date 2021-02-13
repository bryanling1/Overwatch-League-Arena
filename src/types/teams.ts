export enum Teams{
    dynasty = "DYNASTY",
    reign = "REIGN",
    uprising  = "UPRISING",
    hunters = "HUNTERS",
    fuel = "FUEL",
    mayhem = "MAYHEM",
    charge = "CHARGE",
    spark = "SPARK",
    outlaws = "OUTLAWS",
    spitfire = "SPITFIRE",
    gladiators = "GLADIATORS",
    valiant = "VALIANT",
    excelsior = "EXCELSIOR",
    eternal = "ETERNAL",
    fusion = "FUSION",
    shock = "SHOCK",
    dragons = "DRAGONS",
    defiant = "DEFIANT",
    titans = "TITANS",
    justice = "JUSTICE"
}

export const TeamColors = {
    reign: ['rgb(196, 196, 196)','rgb(145, 15, 27)','rgb(50, 50, 50)'],
    uprising: ['rgb(24, 81, 160)','rgb(0, 0, 0)','rgb(239, 228, 0)'],
    hunters: ['rgb(254, 158, 10)','rgb(24, 24, 36)','rgb(182, 145, 107)'],
    fuel: ['rgb(11, 35, 63)','rgb(0, 113, 205)','rgb(158, 162, 163)'],
    mayhem: ['rgb(25, 25, 25)','rgb(60, 180, 229)','rgb(223, 63, 175)'],
    charge: ['rgb(28, 54, 77)','rgb(103, 162, 178)','rgb(19, 238, 218)'],
    spark: ['rgb(250, 114, 152)','rgb(255, 255, 255)','rgb(87, 136, 205)'],
    outlaws: ['rgb(150, 202, 78)','rgb(0, 0, 0)','rgb(255, 255, 255)'],
    spitfire: ['rgb(89, 203, 232)','rgb(27, 43, 58)','rgb(255, 130, 1)'],
    gladiators: ['rgb(56, 19, 96)','rgb(0, 0, 0)','rgb(255, 255, 255)'],
    valiant: ['rgb(255, 209, 0)','rgb(24, 136, 198)'],
    excelsior: ['rgb(24, 28, 57)','rgb(43, 88, 233)','rgb(242, 36, 49)'],
    eternal: ['rgb(47, 61, 87)','rgb(141, 5, 45)','rgb(255, 170, 28)'],
    fusion: ['rgb(248, 157, 42)','rgb(0, 0, 0)','rgb(255, 255, 255)'],
    shock: ['rgb(166, 174, 176)','rgb(252, 76, 1)','rgb(0, 0, 0)'],
    dynasty: ['rgb(0, 0, 0)','rgb(173, 137, 0)','rgb(255, 255, 255)'],
    dragons: ['rgb(210, 39, 48)','rgb(0, 0, 0)','rgb(252, 227, 0)'],
    defiant: ['rgb(0, 0, 0)','rgb(200, 0, 35)','rgb(142, 158, 172)'],
    justice: ['rgb(153, 0, 52)','rgb(255, 255, 255)','rgb(0, 54, 105)'],
    titans: ['rgb(10, 34, 108)','rgb(47, 178, 40)','rgb(255, 255, 255)'],
}

export const getRingColor = (team:Teams):string =>{
    const key = team.toLowerCase();
    switch(team){
        case Teams.dynasty:
            return TeamColors[key][2];
        case Teams.reign:
            return TeamColors[key][1];
        case Teams.uprising:
            return TeamColors[key][2];
        case Teams.hunters:
            return 'white'
        case Teams.fuel:
            return TeamColors[key][1];
        case Teams.mayhem:
            return TeamColors[key][2];
        case Teams.charge:
            return TeamColors[key][1];
        case Teams.spark:
            return TeamColors[key][2];
        case Teams.outlaws:
            return TeamColors[key][2];
        case Teams.spitfire:
            return 'white'
        case Teams.gladiators:
            return 'white'
        case Teams.valiant:
            return TeamColors[key][0];
        case Teams.excelsior:
            return TeamColors[key][1];
        case Teams.eternal:
            return TeamColors[key][2];
        case Teams.fusion:
            return TeamColors[key][1];
        case Teams.shock:
            return 'white';
        case Teams.dragons:
            return TeamColors[key][2];
        case Teams.defiant:
            return TeamColors[key][1];
        case Teams.titans:
            return TeamColors[key][1];
        case Teams.justice:
            return TeamColors[key][2];
        
        
        default:
            return 'black';
    }
}

export const getGradientColor = (team:Teams):string =>{
    const key = team.toLowerCase();
    switch(team){
        case Teams.dynasty:
            return TeamColors[key][1];
        case Teams.reign:
            return TeamColors[key][2];
        case Teams.uprising:
            return TeamColors[key][0];
        case Teams.hunters:
            return TeamColors[key][0];
        case Teams.fuel:
            return TeamColors[key][0];
        case Teams.mayhem:
            return TeamColors[key][0];
        case Teams.charge:
            return TeamColors[key][0];
        case Teams.spark:
            return TeamColors[key][0];
        case Teams.outlaws:
            return TeamColors[key][0];
        case Teams.spitfire:
            return TeamColors[key][0];
        case Teams.gladiators:
            return TeamColors[key][0];
        case Teams.valiant:
            return TeamColors[key][1];
        case Teams.excelsior:
            return TeamColors[key][0];
        case Teams.eternal:
            return TeamColors[key][0];
        case Teams.fusion:
            return TeamColors[key][0];
        case Teams.shock:
            return TeamColors[key][1];
        case Teams.justice:
            return TeamColors[key][0];
        case Teams.defiant:
            return TeamColors[key][0];
        case Teams.titans:
            return TeamColors[key][0];
        case Teams.dragons:
            return TeamColors[key][0];
        
        default:
            return 'black';
    }
}

export const getWinnerColors = (team:Teams):[string, string] =>{
    const key = team ? team.toLowerCase() : '';
    switch(team){
        case Teams.dynasty:
            return [TeamColors[key][1], TeamColors[key][0]];
        case Teams.reign:
            return [TeamColors[key][1], TeamColors[key][0]];
        case Teams.uprising:
            return [TeamColors[key][2], TeamColors[key][0]];
        case Teams.hunters:
            return [TeamColors[key][2], TeamColors[key][0]];
        case Teams.fuel:
            return [TeamColors[key][1], TeamColors[key][0]];
        case Teams.mayhem:
            return [TeamColors[key][1], TeamColors[key][0]];
        case Teams.charge:
            return [TeamColors[key][1], TeamColors[key][0]];
        case Teams.spark:
            return [TeamColors[key][2], TeamColors[key][0]];
        case Teams.outlaws:
            return [TeamColors[key][1], TeamColors[key][0]];
        case Teams.spitfire:
            return [TeamColors[key][2], TeamColors[key][0]];
        case Teams.gladiators:
            return [TeamColors[key][2], TeamColors[key][0]];
        case Teams.valiant:
            return [TeamColors[key][0], TeamColors[key][1]];
        case Teams.excelsior:
            return [TeamColors[key][1], TeamColors[key][0]];
        case Teams.eternal:
            return [TeamColors[key][1], TeamColors[key][0]];
        case Teams.fusion:
            return [TeamColors[key][0], TeamColors[key][1]];
        case Teams.shock:
            return [TeamColors[key][1], TeamColors[key][0]];
        case Teams.justice:
            return [TeamColors[key][2], TeamColors[key][0]];
        case Teams.defiant:
            return [TeamColors[key][1], TeamColors[key][0]];
        case Teams.titans:
            return [TeamColors[key][1], TeamColors[key][0]];
        case Teams.dragons:
            return [TeamColors[key][1], TeamColors[key][0]];
        default:
            return ['yellow', 'black']
    }
}

export const getTeamLogo = (team:Teams):string =>{
    switch(team){
        case Teams.dynasty:
            return 'images/logos/dynasty.png';
        case Teams.reign:
            return 'images/logos/reign.png';
        case Teams.uprising:
            return 'images/logos/uprising.png';
        case Teams.hunters:
            return 'images/logos/hunters.png';
        case Teams.fuel:
            return 'images/logos/fuel.png';
        case Teams.mayhem:
            return 'images/logos/mayhem.png';
        case Teams.charge:
            return 'images/logos/charge.png';
        case Teams.spark:
            return 'images/logos/spark.png';
        case Teams.outlaws:
            return 'images/logos/outlaws.png';
        case Teams.spitfire:
            return 'images/logos/spitfire.png';
        case Teams.gladiators:
            return 'images/logos/gladiators.png';
        case Teams.valiant:
            return 'images/logos/valiant.png';
        case Teams.excelsior:
            return 'images/logos/excelsior.png';
        case Teams.eternal:
            return 'images/logos/eternal.png';
        case Teams.fusion:
            return 'images/logos/fusion.png';
        case Teams.shock:
            return 'images/logos/shock.png';
        case Teams.justice:
            return 'images/logos/justice.png';
        case Teams.defiant:
            return 'images/logos/defiant.png';
        case Teams.titans:
            return 'images/logos/titans.png';
        case Teams.dragons:
            return 'images/logos/dragons.png';
        default:
            return 'images/logos/dynasty.png'
    }
}