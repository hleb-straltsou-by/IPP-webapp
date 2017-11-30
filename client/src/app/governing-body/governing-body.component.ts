import { Component } from '@angular/core';
import { DataListModule } from 'primeng/primeng';

@Component({
    selector: 'governing-body',
    templateUrl: './governing-body.component.html',
    styleUrls: ['./governing-body.component.css']
})

export class GoverningBodyComponent {
    header = "Administration of the Institute";
    
    persons = [
        {
            name: `Soroka Sergey Vladimirovich`,
            header: `Director: Soroka Sergey Vladimirovich,Ph.D in Agr.Sci 
tel:(375 17) 509-23-38, mobile: (029) 699-23-38`,
            info: `was born on March 19,1956 in the village of Leschnya Mozyr district, Gomel region. In 1980 he graduated from the Belarusian Agricultural Academy Agronomy Faculty with the scientific agronomist degree. He has been working at the Institute since 1980. His scientific career started as a junior researcher. Since 1994 he has been at the head of Weed Vegetation Control Lab. Since the beginning of working activities he has been engaged in researches on an important for the Republic problem – improvement of weed control measures. The results of researches on the improvement of Integrated wheat protection against weed vegetation became the basis of the Candidate thesis, which was successfully defended in 1990. In 1998-1999 – He was deputy Director. From 1999 to 2000 – acting as Director, since January 17, 2000 – He is a Director of the Institute of Plant Protection. 
With his direct participation the integrated systems of plant protection against pests, diseases and weeds have been developed, published and actively introduced. S.V. Soroka is the author of farming system in the adaptive agriculture. At present, S.V. Soroka is working on the improvement of energy-efficient integrated plant protection systems against pests, diseases and weeds adaptive farming systems. going over to the adaptive farming systems. The conceptions of new technologies in plant protection against noxious organisms are theoretically substantiated and improved by him. The reports on these subjects are made at the Interrnational Symposiums in Poland (2000, 2001, 2002), Hungary (2002), Minsk (2002).
S.V.Soroka has published more than 280 scientific papers, including 22 articles abroad. He is a Representative from Belarus in EGNS, a member of the Palaearctic IOBC section. Under the direct supervision of S.V.Soroka 2 PhD dissertations have been defended, he is a scientific leader of 5 post-graduate studentscarrying out the research in the field of plant protectionof field, vegetable and fruit crops.
The scientific interests of S.V.Soroka.- plant protection, herbology, ecology, toxicology.`,
            avatar: "soroka.jpg",
        },
        {
            name: `Supranovich Romuald Vladimirovich`,
            header: `Deputy Director in Science: Romuald.V.Supranovich,Ph.D. in Agr. Sci. 
Tel.:(375 17) 509-22-77, mob. (029) 367-82-14`,
            info: `was born on February 22,1949 in the village Soltanishki Voronovo district, Grodno region. In 1970 he graduated from Grodno Agricultural Institute Plant Protection Faculty. He started his career in Smolyanetsk special division “Agicultural equipmenmt” Chashniki district, Vitebsk region as a senior agronomist for chemical plant protection. After military service he returned back home and worked for two years as an agronomist in plant protection in Radunsk division of “Agricultural equipment” Voronovsky district Grodno regionHe has been working at the Institute since December 1972 and has covered the way from Junior scientific worker to Deputy Director in Science. As a Deputy Director he has been working since January 2001. In 1984 he successfully defended his thesis – PhD (in agriculture), the academic title–senior researcher. Supranovich R.V.creates and substantiates tasks and objectives of the Institute researchers in the field of plant protection, defines the ways and methods of solutions He is at the Head of projects development of perspective and annual plans of research and working programs. He organizes carrying out complex researches and elaborations in plant protection problems with the participation of the Institute subdivisions, research foreign institutions, making contracts with the companies, agricultural enterprises and other organizations He ensures the implementation of thematic plans, high quality and level research works putting them into production. He is the organizer of summary scientific and technical reports. He supervises the work of the Institute’s methodical commission.`,
            avatar: `supranovich.jpg`,
        },
        {
            name: `Privalov Dmitry Fiodorovich`,
            header: `Deputy Director in Management: Dmitry F. Privalov,, 
Tel.: (375 17) 509-24-95; mob. (029) 644 60 00`,
            info: `was born on August 5,1984. In 2006 he graduated from the Belarusian State University of Informatics and Radio Electronics specialty ”Engineer of telecommunications”. In 2015 he graduated from the Belarusian Agricultural Academy Agrobiological Faculty. Since 2015 he has been completing the (post-) graduate course at the Belarusian Agricultural Academy specialty “Plant protection”. From 2006 to 2011 he has worked at the Republican Unitary Enterprise "Beltelecom". He has been working at the RUE “Institute of Plant Protection” since 11.01.2011.`,
            avatar: `privalov.jpg`,
        },
        {
            name: `Yakimovich Alena Anatolievna`,
            header: `Deputy Director in Science: Alena A.Yakimovich,Ph.D.in Agriculture 
Tel:(375 17) 509-25-10, mob. (029) 551-40-96`,
            info: `was born on September 25,1977 in the city of Daugavpils, Latvia. In 2001 she graduated excellently Grodno State Agrarian University Plant Protection Faculty with a degree in agricultural chemistry, soil science and plant protection with the specialization in plant protection and quarantine. For the period from 2001 to 2004 she has completed the (post-) graduate course at the RUE “Institute of Plant Protection”. In 2002 by the evening form of training she has completed the E.I."Belarusian State Pedagogical University named after M.Tank specialty “Foreign language (English) . 
In 2006 she defended her Ph.D.in agriculture thesis on the topic«Biological substantiation of millet crops chemical protection against weed plants”. Inj 2004 – 2007 she worked as a Junior Scientific Worker, in 2007-2008 – a Senior researcher of Herbology Lab. 
Since 2008 she has been holding the position of Deputy Director in Science Sphere of scientific interests – Biological substantiation and development of the perspective systems of medicinal and spicy-aromatic crops (calendula (Calendula officinalis}, purple Echinacea (Echinacea purpurea), common motherwort (Leonurus cardiaca), wild chamomile (Matricaria chamomilla), common valerian (Valeriana officinalis), milk thistle (Silybum marianum), autumn crocus (Collchicum), aralia (Aralia), hyssop (Hyssopus) against weeds.`,
            avatar: `jakimovich.jpg`,
        },
        {
            name: `Yarchakovskaya Sveatlana Iosifovna`,
            header: `Scientific Secretary: Sveatlana I. Yarchakovskaya,Ph.D. in Agr.Sci 
Tel.:(375 17) 509-23-43, mob.(029)755-12-72`,
            info: `was born on May 10, 1954 in the village Krutoy Bereg Nesvizh region Minsk district. In 1976 she graduated from Grodno Agricultural Institute Plant Protection Faculty.
She has been working at the Institute since 1971. From March 1971 to 1988 she has been working as a Junior Researcher, from 1988 to 1989 – Scientific Researcher and from 1989 to 1992 – Senior Scientific Researcher of Fruit Crop Protection Lab. Since April 1992 she has been the Scientific Secretary of the Institute. Since 1995 she is the Scientific Secretary of the Council of D 05.08.01 on theses defending. 
S.I.Yarchakovskaya has been engaged in research on biological substantiation of fruit crop protection against pests which were the basis of her Ph.D. dissertation. In 1987 she successfully defended her thesis on the topic “The biological substantiation of currant moth (Incurvaria capitella) and loopers (Operophtera) damaging black currant in Belarus.
In the process of work she mastered the methods of insect systematics. She developed thresholds of harmfulness for leaf-eating pests of fruit and berry crops, a system of black currant protection against main pests. At present the methods for the use of synthetic sex pheromones of insects in the regulation of fruit-berry crops are being developed.by S.I. Yarchakovskaya. 
The reports on these topics have been made at the international symposia, congresses, conferences in Poland (1994, 2003), Bulgaria (1997), Serbi (2004), Minsk (2002). S.I.Yarchakovskaya is the author of over 100 scientific papers, including 2 books and 10 articles abroad.
Sphere of scientific interests of S.I. Yarchakovskaya -: entomology, plant protection, ecology.`,
            avatar: `jarchakovska.jpg`,
        },
        {
            name: `Supranovich Cheslav Vladimirovich`,
            header: `Deputy Director Maintenance Work: Cheslav V. Supranovich, 
Tel.:(375 17) 509-23-52., mob:. (029) 385-61-98`,
            info: `was born on March 5,1956. He is at the Head of Economic Department, organizing timely provision with materials, equipment and auto transport. He coordinates and controls the work of buildings and equipment maintenance in usable condition for safe operation, carrying out capital and current repairing. He deals with transmission and realization to the organizations of NAS of Belarus as well as the third parties the available unnecessary and unused materials and equipment with their price payment or by free transfer order from the balance to the balance. He makes contracts with the suppliers, taking steps to expand direct economic relations with them.`,
            avatar: `supran.jpg`,
        }
    ];
}