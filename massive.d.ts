// Type definitions for massive-js 2.2
// Project: https://github.com/robconery/massive-js
// Definitions by: Amenaeble <https://github.com/amenaeble/>
// Definitions: https://github.com/swissspidy/typed-massive-js

declare module massive {
    interface IConnectionOptions {
        connectionString?: string;
        db?: string;
    }

    export interface ITable {
        count(context: any, callback: (err, res) => void): void;
        find(context: any, callback: (err, res) => void): void;
        find(context: any,
             options: {
                 limit?: number;
                 order?: string;
                 offset?: number;
                 columns?: string[];
             },
             callback: (err, res) => void): void;
        findOne(context: any, callback: (err, res) => void): void;
        findOne(context: any,
                options: {
                    limit?: number;
                    order?: string;
                    offset?: number;
                    columns?: string[];
                },
                callback: (err, res) => void): void;

        insert(context: any, callback: (err, res) => void): void;
        save(context: any, callback: (err, res) => void): void;
        update(context: any, callback: (err, res) => void): void;
        update(context: any, data: any, callback: (err, res) => void): void;
        destroy(context: any, callback: (err, res) => void): void;

    }

    interface IDoc {
        findDoc(context: any, callback: (err, res) => void): void;
        searchDoc(options: {
            keys: string[];
            term: string;
        }, callback: (err, res) => void)
        saveDoc(context: string, callback: (err, res) => void): void;
        destroy(context: any, callback: (err, res) => void): void;
    }

    export interface ITables {
        comment: ITable;
        friendship: ITable;
        participation: ITable;
        person: ITable;
        practice: ITable;
        practicesession: ITable;
        sport: ITable;
        team: ITable;
        teammember: ITable;
        teamsport: ITable;
    }

    export function connectSync(options: IConnectionOptions): ITables

    export function connect(options: IConnectionOptions, callback: (err, db) => void);

    export function run(context: string, filter: number|number[], callback: (err, res) => void)

    export function saveDoc(name: string, data: any, callback: (err, res) => void): void;
}

export = massive;
