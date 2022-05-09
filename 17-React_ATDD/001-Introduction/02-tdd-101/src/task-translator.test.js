import {translate} from "./task-translator";

it('translates d to half a dev day', () => {
    expect(translate('d')).toEqual({'Dev': 0.5});
})

it('translates D to a full dev day', () => {
    expect(translate('D')).toEqual({'Dev': 1.0});
})

it('translates dD to one and a half dev days', () => {
    expect(translate('dD')).toEqual({'Dev': 1.5});
})

it('translate q to half a QA day', () => {
    expect(translate('q')).toEqual({'QA': 0.5});
})

it('translate qQ to one and a half QA day', () => {
    expect(translate('qQ')).toEqual({'QA': 1.5});
})

it('translate dDqdQq to two Dev and two QA day', () => {
    expect(translate('dDqdQq')).toEqual({'Dev': 2, 'QA': 2});
})
