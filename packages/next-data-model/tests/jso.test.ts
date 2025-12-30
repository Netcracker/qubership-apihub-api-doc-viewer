import { JsoTreeBuilder } from "../src/building-service/jso/tree/builder"
import { JsoTree } from "../src/model/jso/tree/tree.impl"
import { JsoPropertyValueTypes } from "../src/model/jso/types/node-value-type"
import { simplifyConsole } from "./helpers/simplify-console"

describe('JSO Tree', () => {
  simplifyConsole()

  it('should build JSO tree from JSO with primitive properties', () => {
    const jso = {
      name: 'John',
      age: 30,
      isStudent: true,
    }

    const builder = new JsoTreeBuilder(jso)
    const tree: JsoTree | undefined = builder.build()
    const root = tree?.root

    expect(root).toBeDefined()

    const properties = root!.childrenNodes()
    expect(properties).toHaveLength(3)

    const name = properties.find(property => property.key === 'name')
    expect(name).toBeDefined()
    expect(name!.value()).toEqual({
      title: 'name',
      value: 'John',
      valueType: JsoPropertyValueTypes.STRING,
      isPrimitive: true,
      isArrayItem: false,
      isPredefinedValueSet: false,
    })

    const age = properties.find(property => property.key === 'age')
    expect(age).toBeDefined()
    expect(age!.value()).toEqual({
      title: 'age',
      value: 30,
      valueType: JsoPropertyValueTypes.NUMBER,
      isPrimitive: true,
      isArrayItem: false,
      isPredefinedValueSet: false,
    })

    const isStudent = properties.find(property => property.key === 'isStudent')
    expect(isStudent).toBeDefined()
    expect(isStudent!.value()).toEqual({
      title: 'isStudent',
      value: true,
      valueType: JsoPropertyValueTypes.BOOLEAN,
      isPrimitive: true,
      isArrayItem: false,
      isPredefinedValueSet: true,
    })
  })

  it('should build JSO tree from JSO with object properties', () => {
    const jso = {
      person: {
        name: 'John',
        age: 30,
        isStudent: true,
      }
    }
    
    const builder = new JsoTreeBuilder(jso)
    const tree: JsoTree | undefined = builder.build()
    const root = tree?.root
    
    expect(root).toBeDefined()

    const properties = root!.childrenNodes()
    expect(properties).toHaveLength(1)

    const person = properties.find(property => property.key === 'person')
    expect(person).toBeDefined()
    expect(person!.value()).toEqual({
      title: 'person',
      value: {
        name: 'John',
        age: 30,
        isStudent: true,
      },
      valueType: JsoPropertyValueTypes.OBJECT,
      isPrimitive: false,
      isArrayItem: false,
      isPredefinedValueSet: false,
    })

    const personProperties = person!.childrenNodes()
    expect(personProperties).toHaveLength(3)

    const name = personProperties.find(property => property.key === 'name')
    expect(name).toBeDefined()
    expect(name!.value()).toEqual({
      title: 'name',
      value: 'John',
      valueType: JsoPropertyValueTypes.STRING,
      isPrimitive: true,
      isArrayItem: false,
      isPredefinedValueSet: false,
    })

    const age = personProperties.find(property => property.key === 'age')
    expect(age).toBeDefined()
    expect(age!.value()).toEqual({
      title: 'age',
      value: 30,
      valueType: JsoPropertyValueTypes.NUMBER,
      isPrimitive: true,
      isArrayItem: false,
      isPredefinedValueSet: false,
    })

    const isStudent = personProperties.find(property => property.key === 'isStudent')
    expect(isStudent).toBeDefined()
    expect(isStudent!.value()).toEqual({
      title: 'isStudent',
      value: true,
      valueType: JsoPropertyValueTypes.BOOLEAN,
      isPrimitive: true,
      isArrayItem: false,
      isPredefinedValueSet: true,
    })
  })

  it('should build JSO tree from JSO with array properties', () => {
    const jso = {
      names: ['John', 'Jane', 'Jim'],
    }
    
    const builder = new JsoTreeBuilder(jso)
    const tree: JsoTree | undefined = builder.build()
    const root = tree?.root

    expect(root).toBeDefined()

    const properties = root!.childrenNodes()

    expect(properties).toHaveLength(1)

    const names = properties.find(property => property.key === 'names')
    expect(names).toBeDefined()
    expect(names!.value()).toEqual({
      title: 'names',
      value: ['John', 'Jane', 'Jim'],
      valueType: JsoPropertyValueTypes.ARRAY,
      isPrimitive: false,
      isArrayItem: false,
      isPredefinedValueSet: false,
    })

    const namesItems = names!.childrenNodes()
    expect(namesItems).toHaveLength(3)

    const name1 = namesItems.find(item => item.key === 0)
    expect(name1).toBeDefined()
    expect(name1!.value()).toEqual({
      title: '0',
      value: 'John',
      valueType: JsoPropertyValueTypes.STRING,
      isPrimitive: true,
      isArrayItem: true,
      isPredefinedValueSet: false,
    })

    const name2 = namesItems.find(item => item.key === 1)
    expect(name2).toBeDefined()
    expect(name2!.value()).toEqual({
      title: '1',
      value: 'Jane',
      valueType: JsoPropertyValueTypes.STRING,
      isPrimitive: true,
      isArrayItem: true,
      isPredefinedValueSet: false,
    })

    const name3 = namesItems.find(item => item.key === 2)
    expect(name3).toBeDefined()
    expect(name3!.value()).toEqual({
      title: '2',
      value: 'Jim',
      valueType: JsoPropertyValueTypes.STRING,
      isPrimitive: true,
      isArrayItem: true,
      isPredefinedValueSet: false,
    })
  })

  it('should build JSO tree from JSO with nested object properties', () => {
    const jso = {
      person: {
        name: 'John',
        address: {
          street: '123 Main St',
          city: 'Anytown',
        }
      }
    }
    
    const builder = new JsoTreeBuilder(jso)
    const tree: JsoTree | undefined = builder.build()
    const root = tree?.root

    expect(root).toBeDefined()

    const properties = root!.childrenNodes()
    expect(properties).toHaveLength(1)

    const person = properties.find(property => property.key === 'person')
    expect(person).toBeDefined()
    expect(person!.value()).toEqual({
      title: 'person',
      value: {
        name: 'John',
        address: {
          street: '123 Main St',
          city: 'Anytown',
        },
      },
      valueType: JsoPropertyValueTypes.OBJECT,
      isPrimitive: false,
      isArrayItem: false,
      isPredefinedValueSet: false,
    })

    const personProperties = person!.childrenNodes()
    expect(personProperties).toHaveLength(2)

    const name = personProperties.find(property => property.key === 'name')
    expect(name).toBeDefined()
    expect(name!.value()).toEqual({
      title: 'name',
      value: 'John',
      valueType: JsoPropertyValueTypes.STRING,
      isPrimitive: true,
      isArrayItem: false,
      isPredefinedValueSet: false,
    })

    const address = personProperties.find(property => property.key === 'address')
    expect(address).toBeDefined()
    expect(address!.value()).toEqual({
      title: 'address',
      value: {
        street: '123 Main St',
        city: 'Anytown',
      },
      valueType: JsoPropertyValueTypes.OBJECT,
      isPrimitive: false,
      isArrayItem: false,
      isPredefinedValueSet: false,
    })

    const addressProperties = address!.childrenNodes()
    expect(addressProperties).toHaveLength(2)

    const street = addressProperties.find(property => property.key === 'street')
    expect(street).toBeDefined()
    expect(street!.value()).toEqual({
      title: 'street',
      value: '123 Main St',
      valueType: JsoPropertyValueTypes.STRING,
      isPrimitive: true,
      isArrayItem: false,
      isPredefinedValueSet: false,
    })
    
    const city = addressProperties.find(property => property.key === 'city')
    expect(city).toBeDefined()
    expect(city!.value()).toEqual({
      title: 'city',
      value: 'Anytown',
      valueType: JsoPropertyValueTypes.STRING,
      isPrimitive: true,
      isArrayItem: false,
      isPredefinedValueSet: false,
    })
  })
})
