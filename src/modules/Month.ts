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
  TEMPERANCE = 'Temperance',
  MOON = 'Moon',
  SUN = 'Sun',
  FAITH = 'Faith',
  COUNCILLOR = 'Councillor',
  EMPEROR = 'Emperor',
  JUSTICE = 'Justice',
  STRENGTH = 'Strength',
  DEVIL = 'Devil'
};

export type Item = {
  name?: string;
  location?: string;
}

export type VisitPerson = {
  name?: string;
  location?: string;
  personaEquipped?: string;
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

export type CallPerson = {
  person?: string;
  location?: string;
  requirement?: string;
  isPersonaEquipped?: boolean;
  equippedPersonas?: string[];
}

export type SellItem = {
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

  isVisitDVDRental?: boolean;
  isBorrowDVD?: boolean;
  isWatchDVD?: boolean;
  isReturnDVD?: boolean;
  isWatchInTheater?: boolean;
  borrowDVDs?: string[];
  returnDVDs?: string[];
  watchDVDs?: string[];
  movieNames?: string[];
  isSignUpDVDMembership?: boolean;

  isStockUpSupplies?: boolean;
  stockedSupplies?: string[];

  isPalaceInfiltration?: boolean;
  isSendCallingCard?: boolean;
  isFindWillSeeds?: boolean;
  isFinishPalace?: boolean;
  bossName?: string;
  goToHideout?: false;
  hideoutLocation?: string;
  isSecureInfiltrationRoute?: boolean;

  isVisitClinic?: boolean;

  confidantAnswers?: ConfidantAnswers[];


  isLeavePalaceWithPersonas?: boolean;
  personas?: Persona[];

  notes?: string[];

  isExamDay: true;
  examAnswers: string[];

  isStudyInDiner?: boolean;
  dinerOrders?: string[];

  isExamineTV?: boolean;
  tvAnswers?: string[];

  isBigBangChallenge?: boolean;

  isHangoutEvent?: boolean;
  hangoutParticipants?: string[];
  hangoutLocation?: string;

  isCallPerson?: boolean;
  callPerson?: CallPerson;

  isVisitMementos?: boolean;
  mementosActions?: string[];

  isVisitDartsAndBilliards?: boolean;
  dartsAndBilliardsActions?: string[];
  dartsAndBilliardsParticipants?: string[];

  isVisitBattingCenter?: boolean;

  isSellItems?: boolean;
  sellItems?: SellItem[];
}

export type Stats = {
  confidants: {
    name: string;
    rank: number;
  }[];
  skills: {
    name: string;
    rank: number;
  }[];
}

export class Month {
  month: number;
  name: string;
  days: Day[];
  stats: Stats;

  constructor(month: number, name: string, days: Day[], stats: Stats) {
    this.month = month;
    this.name = name;
    this.days = days;
    this.stats = stats;
  }
}