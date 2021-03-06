import {TextareaProps} from "./Textarea.props";
import React, {ForwardedRef, forwardRef} from "react";
import cn from 'classnames';
import styles from './Textarea.module.css';

export const Textarea = forwardRef(({error, className, ...props}: TextareaProps, ref: ForwardedRef<HTMLTextAreaElement>): JSX.Element => {
    Textarea.displayName = 'Textarea';
    return (
        <div className={cn(styles.textareaWrapper, className)}>
            <textarea className={cn(styles.textarea, {
            [styles.error]: error
            })} ref={ref} {...props}/>
            {error && <span role='alert' className={styles.errorMessage}>{error.message}</span>}
        </div>
    );
});