
interface Services {
    image:string,
    service:string
    id:number
}

export const popularServices:Services[] = [
    {
        image:'/images/Camera.svg',
        service:'نصب دوربین‌مداربسته',
        id:1
    },    {
        image:'/images/Settings.svg',
        service:' امداد دوربین',
        id:2
    },    {
        image:'/images/SirenRounded.svg',
        service:' اجرا پروژه سرور',
        id:3
    },    {
        image:'/images/CPUBolt.svg',
        service:'نصب و راه‌اندازی UPS',
        id:4
    },
]