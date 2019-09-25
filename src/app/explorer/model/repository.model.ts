
export interface Repository {
  pipe(arg0: any);
    author: string;
    name: string;
    avatar: string;
    url: string;
    description: string;
    language: string;
    languageColor: string;
    stars: number;
    forks: number;
    currentPeriodStars: number;
    builtBy: [{
          username: string,
          href: string,
          avatar: string
        }];
    }

