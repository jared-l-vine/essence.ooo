export default function getHashParams(hash: string) {
  var hashParams: Record<string, string> = {};
  var e,
    a = /\+/g, // Regex for replacing addition symbol with a space
    r = /([^&;=]+)=?([^&;]*)/g,
    d = function(s: string) {
      return decodeURIComponent(s.replace(a, " "));
    },
    q = hash.substring(1);

  while ((e = r.exec(q))) hashParams[d(e[1])] = d(e[2]);

  return hashParams;
}
