class Project {
  id: string;
  category: string;
  year: number;
  title: string;
  image: any;
  description: string;
  demo?: string;
  libraries: string;
  source_code?: string;
  video_url?: string;

  constructor(
    id: string,
    category: string,
    year: number,
    title: string,
    image: any,
    description: string,
    libraries: string,
    demo?: string,
    source_code?: string,
    video_url?: string
  ) {
    this.id = id;
    this.category = category;
    this.year = year;
    this.title = title;
    this.image = image;
    this.description = description;
    this.demo = demo;
    this.libraries = libraries;
    this.source_code = source_code;
    this.video_url = video_url;
  }
}

export default Project;
