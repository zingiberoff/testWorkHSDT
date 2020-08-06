export interface IGraySectionData {
    topics: ITopic[];
}

export interface ITopic {
    title: string;
    primaryNews: IPrimaryNews;
    secondNews: INews[];
}

export interface IPrimaryNews extends INews {
    pictures: IPictureSource[];
}

export interface IPictureSource {
    srcset: string;
    media: string;
}

export interface INews {
    title: string;
    image: string;
}
