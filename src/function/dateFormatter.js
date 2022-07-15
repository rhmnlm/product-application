
//YYYY-MM-DD HH:MM:ss.sns
export function Localdatetime(date){
    return new Date(date).toISOString().replace('T',' ').replace('Z','');
}