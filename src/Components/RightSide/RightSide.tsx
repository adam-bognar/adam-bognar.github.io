import { ExternalLink } from "lucide-react";

export function RightSide() {
    return (
        <div className="flex flex-col w-full md:w-1/2 gap-4 pt-12 md:pt-24 md:pr-30 px-6 text-white/60">

            <div id="about" className={"flex flex-col gap-3"}>

                <p>I’m a university student based in Hungary, passionate about AI and IT security. Whenever I have free time, I spend it learning,
                    building, or improving myself whether through real-world experiences or late-night coding sessions.</p>

                <p>I have experience developing <span className={"font-medium text-white/80"}>Android applications</span>, with the use of Firebase, and I enjoy working
                    across the <span className={"font-medium text-white/80"}>full stack</span>. My go-to technologies include <span className={"font-medium text-white/80"}>React,
                        Preact, TypeScript, C#, ASP.NET Core Web API, Entity Framework, and MSSQL</span>. I’ve deployed projects to both AWS and Azure, and I’m always eager to explore new tools and platforms that push my skills further.</p>

                <p>Lately, I’ve been especially interested in how machine learning and cybersecurity intersect two fields that continue to shape the
                    future of technology in exciting ways.</p>

                <p>When I’m not coding, I’m probably deep-diving into a new concept, working on side projects with friends, or planning my next big step in tech.</p>

            </div>

            <div id={"projects"} class={"flex flex-col my-20 gap-10 "}>
                <a href={"https://github.com/adam-bognar/fitness.git"} target="_blank" className={"flex flex-col gap-2 p-5 hover:cursor-pointer hover:bg-[#162346]/20 hover:shadow-2xl rounded-md transition-all duration-300 ease-in-out"}>
                    <div className={"flex flex-row gap-2 items-center"}>
                        <h1 class={"text-white/80 font-bold"}>Android fitness application</h1>
                        <ExternalLink size={16} />
                    </div>
                    <p className={"text-sm"}>An android fitness aplication for gym enthusiasts. You can track your gym progress session by session, runs and even your macros.
                        It uses MLkit for detecting exercise reps. It stores data using firestore. You can view each individual run on the integrated google maps that draws
                        the path you took. It is even compatible with smart watches. </p>
                    <div className={"bg-[#112a39] text-[#51cfc8] rounded-2xl font-semibold py-2 px-5 w-fit text-xs"}>
                        Kotlin
                    </div>
                </a>
                <a href={"https://github.com/Pacos-Kft/ProjectHub.git"} target={"_blank"} className={"flex flex-col gap-2 p-5 hover:cursor-pointer hover:bg-[#162346]/20 hover:shadow-2xl rounded-md transition-all duration-300 ease-in-out"}>

                    <div className={"flex flex-row gap-2 items-center"}>
                        <h1 class={"text-white/80 font-bold"}>ProjectHub</h1>
                        <ExternalLink size={16} />
                    </div>
                    <p className="text-sm text-white/70 mt-1">
                        This is the backend API for ProjectHub, a web application where users can share project ideas and find partners to collaborate with.
                         The backend is built using ASP.NET Core Web API and uses Microsoft SQL Server for data persistence.
                        <br />
                    </p>
                    <div className={"flex flex-wrap gap-2"}>  
                        <div className={"bg-[#112a39] text-[#51cfc8] rounded-2xl font-semibold py-2 px-5 w-fit text-xs"}>
                            C#
                        </div>
                        <div className={"bg-[#112a39] text-[#51cfc8] rounded-2xl font-semibold py-2 px-5 w-fit text-xs"}>
                            ASP .Net Core
                        </div>
                        <div className={"bg-[#112a39] text-[#51cfc8] rounded-2xl font-semibold py-2 px-5 w-fit text-xs"}>
                            Entity Framework
                        </div>
                        <div className={"bg-[#112a39] text-[#51cfc8] rounded-2xl font-semibold py-2 px-5 w-fit text-xs"}>
                            MSSQL
                        </div>
                    </div>
                </a>
                <a href={"https://github.com/Pacos-Kft/GamingWithMe.git"} target={"_blank"} className={"flex flex-col gap-2 p-5 hover:cursor-pointer hover:bg-[#162346]/20 hover:shadow-2xl rounded-md transition-all duration-300 ease-in-out"}>

                    <div className={"flex flex-row gap-2 items-center"}>
                        <h1 class={"text-white/80 font-bold"}>GamingWithMe</h1>
                        <ExternalLink size={16} />
                    </div>
                    <p className="text-sm text-white/70 mt-1">
                        GamingWithMe is a platform currently under development that enables players to hire professional coaches to support their improvement. 
                        The system offers appointment booking, various profile categories, and personalized services. The backend follows a clean architecture, 
                        with separate layers handling business logic, data access, and APIs. A key part of the project is payment integration, 
                        secure authentication, and building scalable, maintainable code using various design patterns.
                        <br />
                    </p>
                    <div className={"flex flex-wrap gap-2"}>  
                        <div className={"bg-[#112a39] text-[#51cfc8] rounded-2xl font-semibold py-2 px-5 w-fit text-xs"}>
                            C#
                        </div>
                        <div className={"bg-[#112a39] text-[#51cfc8] rounded-2xl font-semibold py-2 px-5 w-fit text-xs"}>
                            ASP .Net Core
                        </div>
                        <div className={"bg-[#112a39] text-[#51cfc8] rounded-2xl font-semibold py-2 px-5 w-fit text-xs"}>
                            Entity Framework
                        </div>
                        <div className={"bg-[#112a39] text-[#51cfc8] rounded-2xl font-semibold py-2 px-5 w-fit text-xs"}>
                            MSSQL
                        </div>
                    </div>
                </a>
                <a href={"https://adam-bognar.github.io/ecommerce"} target={"_blank"} className={"flex flex-col gap-2 p-5 hover:cursor-pointer hover:bg-[#162346]/20 hover:shadow-2xl rounded-md transition-all duration-300 ease-in-out"}>

                    <div className={"flex flex-row gap-2 items-center"}>
                        <h1 class={"text-white/80 font-bold"}>Crochet webshop</h1>
                        <ExternalLink size={16} />
                    </div>
                    <p className="text-sm text-white/70 mt-1">
                        A cozy little webshop dedicated to all things crochet — from beginner-friendly kits to handcrafted amigurumi figures.
                        Whether you're looking to pick up a relaxing new hobby or searching for a unique handmade gift, this store has something
                        for every yarn lover. Built with love using Preact and Tailwind CSS, it's designed to be simple, fast, and fun to browse.
                        <br />
                        <span className={"text-xs text-white/20"}>(It might take longer to load I am hosting from free plan)</span>
                    </p>
                    <div className={"flex flex-wrap gap-2"}>
                        <div className={"bg-[#112a39] text-[#51cfc8] rounded-2xl font-semibold py-2 px-5 w-fit text-xs"}>
                            Preact
                        </div>
                        <div className={"bg-[#112a39] text-[#51cfc8] rounded-2xl font-semibold py-2 px-5 w-fit text-xs"}>
                            TypeScript
                        </div>
                        <div className={"bg-[#112a39] text-[#51cfc8] rounded-2xl font-semibold py-2 px-5 w-fit text-xs"}>
                            Tailwind CSS
                        </div>
                        <div className={"bg-[#112a39] text-[#51cfc8] rounded-2xl font-semibold py-2 px-5 w-fit text-xs"}>
                            C#
                        </div>
                        <div className={"bg-[#112a39] text-[#51cfc8] rounded-2xl font-semibold py-2 px-5 w-fit text-xs"}>
                            ASP .Net Core
                        </div>
                        <div className={"bg-[#112a39] text-[#51cfc8] rounded-2xl font-semibold py-2 px-5 w-fit text-xs"}>
                            Entity Framework
                        </div>
                        <div className={"bg-[#112a39] text-[#51cfc8] rounded-2xl font-semibold py-2 px-5 w-fit text-xs"}>
                            SSMS
                        </div>
                        <div className={"bg-[#112a39] text-[#51cfc8] rounded-2xl font-semibold py-2 px-5 w-fit text-xs"}>
                            MSSQL
                        </div>
                        <div className={"bg-[#112a39] text-[#51cfc8] rounded-2xl font-semibold py-2 px-5 w-fit text-xs"}>
                            Vite
                        </div>
                    </div>
                </a>
                <a href={"https://github.com/adam-bognar/mirrow.git"} target={"_blank"} className={"flex flex-col gap-2 p-5 hover:cursor-pointer hover:bg-[#162346]/20 hover:shadow-2xl rounded-md transition-all duration-300 ease-in-out"}>

                    <div className={"flex flex-row gap-2 items-center"}>
                        <h1 class={"text-white/80 font-bold"}>Mirrow</h1>
                        <ExternalLink size={16} />
                    </div>
                    <p className="text-sm text-white/70 mt-1">
                        Mirrow is a web application that allows users to book appointments with businesses.
                         It is built using a clean architecture approach, with a Preact frontend and an ASP.NET Core Web API 
                         backend written in C#. The application uses Microsoft SQL Server for data storage and focuses on maintainability, 
                         scalability, and clear separation of concerns throughout the codebase.
                        <br />
                        <span className={"text-xs text-white/20"}>(It might take longer to load I am hosting from free plan)</span>
                    </p>
                    <div className={"flex flex-wrap gap-2"}>
                        <div className={"bg-[#112a39] text-[#51cfc8] rounded-2xl font-semibold py-2 px-5 w-fit text-xs"}>
                            Preact
                        </div>
                        <div className={"bg-[#112a39] text-[#51cfc8] rounded-2xl font-semibold py-2 px-5 w-fit text-xs"}>
                            TypeScript
                        </div>
                        <div className={"bg-[#112a39] text-[#51cfc8] rounded-2xl font-semibold py-2 px-5 w-fit text-xs"}>
                            Tailwind CSS
                        </div>
                        <div className={"bg-[#112a39] text-[#51cfc8] rounded-2xl font-semibold py-2 px-5 w-fit text-xs"}>
                            C#
                        </div>
                        <div className={"bg-[#112a39] text-[#51cfc8] rounded-2xl font-semibold py-2 px-5 w-fit text-xs"}>
                            ASP .Net Core
                        </div>
                        <div className={"bg-[#112a39] text-[#51cfc8] rounded-2xl font-semibold py-2 px-5 w-fit text-xs"}>
                            Entity Framework
                        </div>
                        <div className={"bg-[#112a39] text-[#51cfc8] rounded-2xl font-semibold py-2 px-5 w-fit text-xs"}>
                            MSSQL
                        </div>
                    </div>
                </a>
                <a href={"https://github.com/adam-bognar/pytorch-cat-classification.git"} target={"_blank"} className={"flex flex-col gap-2 p-5 hover:cursor-pointer hover:bg-[#162346]/20 hover:shadow-2xl rounded-md transition-all duration-300 ease-in-out"}>

                    <div className={"flex flex-row gap-2 items-center"}>
                        <h1 class={"text-white/80 font-bold"}>Cat Breed Classifier (PyTorch + Transfer Learning)</h1>
                        <ExternalLink size={16} />
                    </div>
                    <p className="text-sm text-white/70 mt-1">
                        This project classifies cat images into one of three breeds: Maine Coon, Manx, or Ragdoll using a fine-tuned ResNet18 model. Custom CNN and Transfer Learning comparison 
                        Transfer learning with ResNet18 (pretrained on ImageNet)
                        <br />
                    </p>
                    <div className={"flex flex-wrap gap-2"}>  
                        <div className={"bg-[#112a39] text-[#51cfc8] rounded-2xl font-semibold py-2 px-5 w-fit text-xs"}>
                            PyTorch
                        </div>
                        <div className={"bg-[#112a39] text-[#51cfc8] rounded-2xl font-semibold py-2 px-5 w-fit text-xs"}>
                            Transfer Learning
                        </div>
                        <div className={"bg-[#112a39] text-[#51cfc8] rounded-2xl font-semibold py-2 px-5 w-fit text-xs"}>
                            CNN
                        </div>
                        <div className={"bg-[#112a39] text-[#51cfc8] rounded-2xl font-semibold py-2 px-5 w-fit text-xs"}>
                            Torchvision
                        </div>
                    </div>
                </a>
                <a href={"https://github.com/adam-bognar/pytorch.git"} target={"_blank"} className={"flex flex-col gap-2 p-5 hover:cursor-pointer hover:bg-[#162346]/20 hover:shadow-2xl rounded-md transition-all duration-300 ease-in-out"}>

                    <div className={"flex flex-row gap-2 items-center"}>
                        <h1 class={"text-white/80 font-bold"}>Pytorch practice projects</h1>
                        <ExternalLink size={16} />
                    </div>
                    <p className="text-sm text-white/70 mt-1">
                        A collection of small projects to practice PyTorch. These include a simple CNN for MNIST digit classification, and a few other
                        experiments with different architectures and datasets. Each project is designed to help solidify my understanding of PyTorch and deep learning concepts.
                        <br />
                    </p>
                    <div className={"flex flex-wrap gap-2"}>  
                        <div className={"bg-[#112a39] text-[#51cfc8] rounded-2xl font-semibold py-2 px-5 w-fit text-xs"}>
                            PyTorch
                        </div>
                        <div className={"bg-[#112a39] text-[#51cfc8] rounded-2xl font-semibold py-2 px-5 w-fit text-xs"}>
                            Transfer Learning
                        </div>
                        <div className={"bg-[#112a39] text-[#51cfc8] rounded-2xl font-semibold py-2 px-5 w-fit text-xs"}>
                            CNN
                        </div>
                        <div className={"bg-[#112a39] text-[#51cfc8] rounded-2xl font-semibold py-2 px-5 w-fit text-xs"}>
                            Torchvision
                        </div>
                        <div className={"bg-[#112a39] text-[#51cfc8] rounded-2xl font-semibold py-2 px-5 w-fit text-xs"}>
                            Linear regression
                        </div>
                        <div className={"bg-[#112a39] text-[#51cfc8] rounded-2xl font-semibold py-2 px-5 w-fit text-xs"}>
                            Multi classification
                        </div>
                    </div>
                </a>
            </div>


        </div>
    )
}