/**
 * @packageDocumentation
 * @module shared/UiModule
 * @author luchik
 */
/** */
import { EventEmitter } from '@angular/core';
// Core Lib
import { EntitySignalInterface } from '@app-core/lib/signals/entity-signal-interface';
import { EntityAbstract } from '@app-core/domain/models/entity-abstract/entity-abstract';
// Core Domain
import { ListSignalInterface } from '@app-core/lib/signals/list-signal-interface';

/**
 * Common form interface
 */
export interface FormComponentInterface {
    initialData: EntityAbstract | any;
    /**
     * Options
     */
    options?: any;
    /**
     * Emit form data is changed
     */
    whenChanged: EventEmitter<EntitySignalInterface>;
    /**
     * Emit form data list dependencies are loded
     */
    whenLoaded?: EventEmitter<ListSignalInterface>;
}
