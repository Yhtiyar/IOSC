export interface IService {
    apiURL:string,
    getAll(),
    addNew(element),
    update(element),
    delete(element),
}