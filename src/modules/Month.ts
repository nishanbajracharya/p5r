export enum DayNames {
  SUNDAY = 'Sunday',
  MONDAY = 'Monday',
  TUESDAY = 'Tuesday',
  WEDNESDAY = 'Wednesday',
  THURSDAY = 'Thursday',
  FRIDAY = 'Friday',
  SATURDAY = 'Saturday',
};

export enum SkillNames {
  KNOWLEDGE = 'Knowledge',
  GUTS = 'Guts',
  PROFICIENCY = 'Proficiency',
  KINDNESS = 'Kindness',
  CHARM = 'Charm',
};

export enum ConfidantNames {
  FOOL = 'Fool',
  MAGICIAN = 'Magician',
  HIEROPHANT = 'Hierophant',
  LOVERS = 'Lovers',
  CHARIOT = 'Chariot',
  DEATH = 'Death',
};

export type Item = {
  name?: string;
  location?: string;
}

export type VisitPerson = {
  name?: string;
  location?: string;
}

export type ConfidantAnswers = {
  answer?: string;
  specific?: boolean;
  isPhone?: boolean;
}

export type ReadBook = {
  name?: string;
  location?: string;
}


export type ConfidantRank = {
  name?: ConfidantNames;
  rank?: number;
  increase?: number;
  rankUp?: boolean;
}

export type Skill = {
  name?: SkillNames;
  increase?: number;
  rank?: number;
  rankUp?: boolean;
};

export type Day = {
  date: number;
  name: DayNames;
  daytime?: Event[];
  evening?: Event[];
}

export type Persona = {
  name?: string;
  confidant?: ConfidantNames;
}

export type Trophy = {
  name?: string;
  unlockMode?: string;
}

export type Job = {
  name?: string;
  location?: string;
}

export type Event = {
  isClass?: boolean;
  classAnswers?: string[];

  isTrophyEarned?: boolean;
  trophies?: Trophy[];

  isBuyItem?: boolean;
  buyItems?: Item[];

  isCrosswordSolve?: boolean;
  crosswordAnswers?: string[];

  isCleanRoom?: boolean;

  isExamineBedroomPlant?: boolean;

  isCraftItem?: boolean;
  itemCraft?: Item[];

  isUseItem?: boolean;
  useItems?: string[];

  isVisitPerson?: boolean;
  isConfidantHangout?: boolean;
  visitedPeople?: VisitPerson[];

  isConfidantUp?: boolean;
  confidantRanks?: ConfidantRank[];

  isSkillUp?: boolean;
  skills?: Skill[];

  isVisitLibrary?: boolean;
  isBorrowBook?: boolean;
  isReadBook?: boolean;
  isReturnBook?: boolean;
  readBooks?: ReadBook[];
  borrowBooks?: string[];
  returnBooks?: string[];
  isStudyInLeblanc?: boolean;
  isStudyInLibrary?: boolean;

  isVisitBathhouse?: boolean;

  isApplyJob?: boolean;
  isWorkJob?: boolean;
  jobs?: Job[];
  jobAnswers?: string[];

  isPersonaEquipped?: boolean;
  equippedPersonas?: string[];

  isMakeCoffee?: boolean;

  isHomeShopping?: boolean;
  homeShoppingPurchases?: string[];

  isVisitDVDRenter?: boolean;
  isBorrowDVD?: boolean;
  isWatchDVD?: boolean;
  isReturnDVD?: boolean;
  isWatchInTheater?: boolean;
  dvdNames?: string[];
  movieNames?: string[];

  isStockUpSupplies?: boolean;
  stockedSupplies?: string[];

  isPalaceInfiltration?: boolean;
  isSendCallingCard?: boolean;
  isFindWillSeeds?: boolean;
  isFinishPalace?: boolean;
  bossName?: string[];

  isVisitClinic?: boolean;

  confidantAnswers?: ConfidantAnswers[];

  goToHideout?: false;
  hideoutLocation?: string;
  isSecureInfiltrationRoute?: boolean;

  isLeavePalaceWithPersonas?: boolean;
  personas?: Persona[];

  notes?: string[];
}

export class Month {
  month: number;
  name: string;
  days: Day[];

  constructor(month: number, name: string, days: Day[]) {
    this.month = month;
    this.name = name;
    this.days = days;
  }
}