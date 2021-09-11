import {Customer} from './customer';
import {Additional} from './additional';
import {Dependent} from './dependent';
import {Spouse} from './spouse';
import {Work} from './work';
import {References} from './references';
import {IDocument} from './document';

export interface DetalleCredito {
    customer: Customer;
    documents: IDocument[];
    additionalies: Additional;
    dependents: Dependent[];
    spouse: Spouse;
    work: Work;
    references: References[];
}
