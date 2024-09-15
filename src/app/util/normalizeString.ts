/** 
 * Remove acentos das palavras
 * Deixa em letras minúsculas 
 * Substitui espaços por underline

*/
export function normalizeString(str: string) {
    return str.normalize('NFD').replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(" ", "_");
}