import React, { useState } from "react"

import { useFider } from "@fider/hooks"
import { activateI18N } from "@fider/services"

import locales from "@locale/locales"

const LocaleChanger = () => {
  const fider = useFider()

  const [locale, setLocale] = useState<string>(localStorage.getItem("locale") || fider.session.tenant.locale)

  const setLocalStorage = (locale: string) => {
    localStorage.setItem("locale", locale)
  }

  return (
    <select
      className="c-select mr-2"
      defaultValue={locale}
      style={{
        width: "auto",
        marginLeft: "auto",
      }}
      onChange={(o) => {
        setLocale(o.target.value || locale)
        activateI18N(o.target.value || locale)
        setLocalStorage(o.target.value || locale)
      }}
    >
      {Object.entries(locales)
        .map(([k, v]) => ({
          value: k,
          label: v.text,
        }))
        .map(({ value, label }) => {
          return (
            <option key={value} value={value}>
              {label}
            </option>
          )
        })}
    </select>
  )
}

export default LocaleChanger
