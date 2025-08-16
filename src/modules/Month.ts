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

export type Event = {
  isClass?: boolean;
  classAnswers?: string[];

  isTrophyEarned?: boolean;
  trophies?: string[];

  isBuyItem?: boolean;
  buyItems?: Item[];

  isCrosswordSolve?: boolean;
  crosswordAnswers?: string[];

  isCleanRoom?: boolean;

  isExamineBedroomPlant?: boolean;

  isCraftItem?: boolean;
  itemCraft?: Item[];

  isVisitPerson?: boolean;
  isConfidantHangout?: boolean;
  visitedPeople?: VisitPerson[];

  isConfidantUp?: boolean;
  confidants?: Confidant[];

  isSkillUp?: boolean;
  skills?: Skill[];

  isVisitLibrary?: boolean;
  isBorrowBook?: boolean;
  isReadBook?: boolean;
  isReturnBook?: boolean;
  isStudyInLibrary?: boolean;
  isStudyInLeblanc?: boolean;
  bookNames?: string[];

  isVisitBathhouse?: boolean;

  isApplyJob?: boolean;
  isWorkJob?: boolean;
  jobNames?: string[];
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
  bossNames?: string[];

  isVisitClinic?: boolean;

  confidantAnswers?: ConfidantAnswers[];

  notes?: string[];
}

export type Confidant = {
  name: ConfidantNames;
  rank: number;
  increase: number;
}

export type Skill = {
  name: SkillNames;
  increase: number;
  rank: number;
};

export type Day = {
  date: number;
  name: DayNames;
  daytime?: Event[];
  evening?: Event[];
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