export function createDate(time?: number): Date{
  let d = time ? new Date(time) : new Date();
  d.setTime( d.getTime() - new Date().getTimezoneOffset()*60*1000 );
  return d;
}
